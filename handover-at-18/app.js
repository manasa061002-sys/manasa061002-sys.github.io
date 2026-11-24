/* Handover at 18. A clickable prototype. Everything here is made up:
   the child, the amounts and the growth curve. */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var STATE_PAYS = 10; // euros a month, age 6 to 18
  var GROWTH = 0.05 / 12; // a simple made-up monthly growth rate
  var LAST = 144; // months from the 6th to the 18th birthday

  var s = { who: 'nina', age: 7, topUp: 15, step: 0, back: false, open: {}, amount: 25, tip: 0 };

  /* ---------- the money ---------- */

  function series() {
    var v = [0];
    for (var i = 1; i <= LAST; i++) v.push(v[i - 1] * (1 + GROWTH) + STATE_PAYS + s.topUp);
    return v;
  }
  var monthsAt = function (age) { return Math.min(LAST, (age - 6) * 12 + 1); };
  var euros = function (n) { return Math.round(n).toLocaleString('en-GB') + ' euros'; };

  /* ---------- small pieces ---------- */

  var TREE_MARK = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 19V11" stroke="#5f6984" stroke-width="2.4" stroke-linecap="round"/><circle cx="10" cy="8" r="6.5" fill="#1d3f8f"/></svg>';

  function appBar(left, right) {
    return '<div class="app-bar"><span class="who">' + left + '</span><span class="muted">' + right + '</span></div>';
  }

  // The tree: a trunk, a few branches, and leaves that appear as the depot grows.
  var LEAVES = [
    [150, 118, 30, 'l1'], [118, 132, 24, 'l2'], [182, 132, 24, 'l2'], [150, 84, 26, 'l2'],
    [100, 104, 22, 'l1'], [200, 104, 22, 'l1'], [124, 74, 20, 'l3'], [176, 74, 20, 'l3'],
    [82, 136, 18, 'l3'], [218, 136, 18, 'l3'], [150, 52, 20, 'l1'], [106, 58, 15, 'l2'],
    [194, 58, 15, 'l2'], [70, 108, 14, 'l2'], [230, 108, 14, 'l2'], [150, 150, 18, 'l3'],
  ];
  var shownLeaves = 0;
  function leafCount(months) { return Math.max(2, Math.round(2 + (months / LAST) * (LEAVES.length - 2))); }
  function treeSVG(count, from) {
    var leaves = LEAVES.map(function (l, i) {
      return '<circle class="leaf ' + l[3] + (i >= from ? ' is-off' : '') + '" data-i="' + i + '" cx="' + l[0] + '" cy="' + l[1] + '" r="' + l[2] + '"/>';
    }).join('');
    return (
      '<svg class="tree" viewBox="0 0 300 250" role="img" aria-label="A money tree with ' + count + ' bunches of leaves">' +
      '<ellipse class="ground" cx="150" cy="236" rx="110" ry="10"/>' +
      '<path class="trunk" d="M150 234 C 148 200, 152 170, 150 132"/>' +
      '<path class="branch" d="M150 170 C 135 155, 120 150, 108 136 M150 158 C 165 146, 182 142, 192 130 M150 142 C 148 120, 150 100, 150 88"/>' +
      leaves + '</svg>'
    );
  }
  // let the leaves grow in after the screen is drawn
  function growTree(count) {
    var from = shownLeaves;
    shownLeaves = count;
    if (reduced || from === count) return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.querySelectorAll('.tree .leaf').forEach(function (l) { l.classList.toggle('is-off', +l.dataset.i >= count); });
      });
    });
    return from;
  }

  // A very plain line chart: the value so far, no axes. Tap or hover to read it.
  function chartHTML(v, months) {
    var W = 300;
    var H = 130;
    var max = v[LAST] * 1.05;
    var pts = [];
    for (var i = 0; i <= months; i++) pts.push([(i / LAST) * W, H - (v[i] / max) * H]);
    var line = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ');
    var end = pts[pts.length - 1];
    var area = line + ' L' + end[0].toFixed(1) + ' ' + H + ' L0 ' + H + ' Z';
    return (
      '<div class="chart"><svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" role="img" aria-label="Value of the depot over time, now ' + euros(v[months]) + '">' +
      '<line class="base" x1="0" y1="' + H + '" x2="' + W + '" y2="' + H + '" vector-effect="non-scaling-stroke"/>' +
      '<path class="area" d="' + area + '"/>' +
      '<path class="line" d="' + line + '" vector-effect="non-scaling-stroke"/>' +
      '<line class="cross" x1="0" x2="0" y1="0" y2="' + H + '" vector-effect="non-scaling-stroke" visibility="hidden"/>' +
      '</svg>' +
      '<p class="chart-read"><span>Age 6</span><span class="read" aria-live="polite">Now: <b>' + euros(v[months]) + '</b></span><span>Age 18</span></p></div>'
    );
  }
  function wireChart(v, months) {
    var svg = document.querySelector('.chart svg');
    if (!svg) return;
    var cross = svg.querySelector('.cross');
    var read = document.querySelector('.chart-read .read');
    var reset = function () {
      cross.setAttribute('visibility', 'hidden');
      read.innerHTML = 'Now: <b>' + euros(v[months]) + '</b>';
    };
    svg.addEventListener('pointermove', function (e) {
      var r = svg.getBoundingClientRect();
      var i = Math.round(((e.clientX - r.left) / r.width) * LAST);
      i = Math.max(0, Math.min(months, i));
      var x = (i / LAST) * 300;
      cross.setAttribute('x1', x);
      cross.setAttribute('x2', x);
      cross.setAttribute('visibility', 'visible');
      read.innerHTML = 'Age ' + Math.floor(6 + i / 12) + ': <b>' + euros(v[i]) + '</b>';
    });
    svg.addEventListener('pointerleave', reset);
  }

  function row(id, label, right, body) {
    var open = !!s.open[id];
    return (
      '<div class="row"><button type="button" data-row="' + id + '" aria-expanded="' + open + '"><span>' + label + '</span><span><span class="muted">' + (right || '') + '</span><span class="chev" aria-hidden="true"></span></span></button>' +
      '<div class="row-body"' + (open ? '' : ' hidden') + '>' + body + '</div></div>'
    );
  }

  /* ---------- the screens ---------- */

  var TIPS = [
    'An ETF is one basket that holds small pieces of many companies at once.',
    'This money is meant for when you’re old. Leaving it alone is how it grows.',
    'The state adds 10 euros to your depot every month until you turn 18.',
    'Prices go up and down from day to day. This money has decades to ride that out.',
  ];

  function stageOf(age) { return age <= 9 ? 'tree' : age <= 13 ? 'pieces' : age <= 17 ? 'numbers' : 'handover'; }

  function parentScreen(v, m) {
    if (s.age >= 18) {
      return (
        '<section class="app">' + appBar('<b>Nina’s depot</b>', 'Parent') +
        '<p class="big">Nina’s depot is hers now.</p>' +
        '<p class="sub">It became hers on her 18th birthday. You’ll only see it if she shares it with you.</p>' +
        '<div class="rows">' + row('gift', 'Send her a one-off top-up', '', '<p class="sub">She gets a request in her app and decides whether to accept it.</p>') + '</div></section>'
      );
    }
    var levels = [
      ['tree', '6 to 9: a money tree and one number'],
      ['pieces', '10 to 13: the companies she owns a piece of'],
      ['numbers', '14 to 17: the real numbers and a chart'],
      ['handover', '18: the depot becomes hers'],
    ].map(function (l) {
      var now = stageOf(s.age) === l[0];
      return '<li' + (now ? ' class="is-now"' : '') + '>' + l[1] + (now ? ' (now)' : '') + '</li>';
    }).join('');
    return (
      '<section class="app">' + appBar('<b>Nina’s depot</b>', 'Parent') +
      '<p class="big">Nina’s depot: ' + euros(v[m]) + '</p>' +
      '<p class="sub">10 euros a month from the state, ' + s.topUp + ' from you.</p>' +
      chartHTML(v, m) +
      '<div class="rows">' +
      row('topup', 'Change your monthly top-up', s.topUp + ' euros', '<div class="stepper"><button type="button" data-topup="-5" aria-label="5 euros less">−</button><output>' + s.topUp + ' euros</output><button type="button" data-topup="5" aria-label="5 euros more">+</button></div>') +
      row('sees', 'What Nina can see', '', '<ul class="levels">' + levels + '</ul>') +
      '</div></section>'
    );
  }

  function ninaScreen(v, m) {
    var bar = appBar(TREE_MARK + '<b>My depot</b>', 'Nina, ' + s.age);
    var stage = stageOf(s.age);
    if (stage === 'tree') {
      return (
        '<section class="app">' + bar +
        '<p class="big">You have a money tree.</p>' +
        '<p class="sub">Every month the state and your parents water it.</p>' +
        treeSVG(leafCount(m), shownLeaves) +
        '<p class="one-number">It’s worth<b>' + euros(v[m]) + '</b></p></section>'
      );
    }
    if (stage === 'pieces') {
      return (
        '<section class="app">' + bar +
        '<p class="big">You own small pieces of thousands of companies.</p>' +
        '<p class="sub">Here are a few of them.</p>' +
        '<ul class="pieces"><li><span class="bit"></span>a toy maker</li><li><span class="bit"></span>a train company</li><li><span class="bit"></span>a chocolate factory</li><li><span class="bit"></span>a phone maker</li></ul>' +
        '<p class="pieces-more">and thousands more, all over the world.</p>' +
        '<p class="one-number">All together<b>' + euros(v[m]) + '</b></p></section>'
      );
    }
    if (stage === 'numbers') {
      var tip = TIPS[s.tip % TIPS.length];
      return (
        '<section class="app">' + bar +
        '<p class="big">Your depot: ' + euros(v[m]) + '</p>' +
        '<p class="sub">10 euros a month from the state, ' + s.topUp + ' from your parents.</p>' +
        chartHTML(v, m) +
        '<p class="tip"><b>Did you know?</b> ' + tip + '</p></section>'
      );
    }
    return handover(v);
  }

  /* ---------- the handover flow at 18 ---------- */

  function stepsBar(n) {
    var out = '';
    for (var i = 0; i < 5; i++) out += '<span' + (i <= n ? ' class="is-on"' : '') + '></span>';
    return '<div class="steps-bar" aria-label="Step ' + (n + 1) + ' of 5">' + out + '</div>';
  }

  function handover(v) {
    var total = v[LAST];
    var state = STATE_PAYS * LAST;
    var parents = s.topUp * LAST;
    var grew = total - state - parents;
    var back = s.step > 0 && s.step < 4 ? '<button type="button" class="back" data-step="' + (s.step === 3.5 || s.step === 3.6 ? 3 : s.step - 1) + '">‹ Back</button>' : TREE_MARK + '<b>My depot</b>';
    var bar = appBar(back, 'Nina, 18');
    var cls = 'app flow' + (s.back ? ' is-back' : '');

    if (s.step === 0) {
      return '<section class="' + cls + '">' + bar + stepsBar(0) +
        '<p class="big">Happy 18th. This depot is now yours.</p>' +
        '<p class="hero-num">' + euros(total) + '</p>' +
        '<button type="button" class="btn" data-step="1">Let’s set it up</button></section>';
    }
    if (s.step === 1) {
      return '<section class="' + cls + '">' + bar + stepsBar(1) +
        '<p class="big">Quick check that it’s you.</p>' +
        '<p class="sub">Your ID check would happen here.</p>' +
        '<div class="check-bar"><span></span></div><div class="ph"></div><div class="ph is-short"></div>' +
        '<button type="button" class="btn" data-step="2" id="check-next" disabled>Continue</button></section>';
    }
    if (s.step === 2) {
      var pc = function (n) { return ((n / total) * 100).toFixed(1) + '%'; };
      return '<section class="' + cls + '">' + bar + stepsBar(2) +
        '<p class="big">Here’s what you own.</p>' +
        '<div class="split" role="img" aria-label="From the state ' + euros(state) + ', from your parents ' + euros(parents) + ', growth ' + euros(grew) + '">' +
        '<span class="s-state" style="width:' + pc(state) + '"></span><span class="s-parents" style="width:' + pc(parents) + '"></span><span class="s-growth" style="width:' + pc(grew) + '"></span></div>' +
        '<ul class="split-list">' +
        '<li><span class="key s-state"></span>From the state<span class="val">' + euros(state) + '</span></li>' +
        '<li><span class="key s-parents"></span>From your parents<span class="val">' + euros(parents) + '</span></li>' +
        '<li><span class="key s-growth"></span>It grew by<span class="val">' + euros(grew) + '</span></li>' +
        '<li>All yours<span class="val">' + euros(total) + '</span></li></ul>' +
        '<p class="sub">It stays invested until you retire, so it has decades left to grow.</p>' +
        '<button type="button" class="btn" data-step="3">Next</button></section>';
    }
    if (s.step === 3) {
      return '<section class="' + cls + '">' + bar + stepsBar(3) +
        '<p class="big">What do you want to do?</p>' +
        '<div class="choices">' +
        '<button type="button" class="choice" data-step="4">Keep it as it is<span>The state stops paying at 18. It keeps growing.</span></button>' +
        '<button type="button" class="choice" data-step="3.5">Add my own monthly amount<span>Pick an amount. You can change it any time.</span></button>' +
        '<button type="button" class="choice" data-step="3.6">Move it to another provider<span>You can move it into a private pension contract until you turn 35.</span></button>' +
        '</div></section>';
    }
    if (s.step === 3.5) {
      var amounts = [10, 25, 50].map(function (a) { return '<button type="button" data-amount="' + a + '" aria-pressed="' + (s.amount === a) + '">' + a + ' euros</button>'; }).join('');
      return '<section class="' + cls + '">' + bar + stepsBar(3) +
        '<p class="big">How much a month?</p>' +
        '<p class="sub">It goes in on the 1st of every month.</p>' +
        '<div class="amounts" role="group" aria-label="Monthly amount">' + amounts + '</div>' +
        '<button type="button" class="btn" data-step="4">Add ' + s.amount + ' euros a month</button></section>';
    }
    if (s.step === 3.6) {
      return '<section class="' + cls + '">' + bar + stepsBar(3) +
        '<p class="big">Your depot is on its way.</p>' +
        '<p class="sub">Moving to Fernhain Vorsorge. Usually 2 to 3 weeks. You don’t need to do anything.</p>' +
        '<div class="route" aria-hidden="true"><div class="route-line"><span class="route-done" style="width:0%"></span></div>' +
        '<div class="route-dots"><span class="route-dot" style="left:0%"></span><span class="route-dot" style="left:50%"></span><span class="route-dot" style="left:100%"></span><span class="route-marker" style="left:0%"></span></div></div>' +
        '<p class="route-names"><span class="is-here">This app</span><span>Clearstream</span><span>Fernhain Vorsorge</span></p>' +
        '<div class="rows">' +
        row('moving', 'What’s moving', '1 depot', '<ul class="list"><li><span>Frühstart-Rente depot</span><span class="muted">' + euros(total) + '</span></li></ul>') +
        row('history', 'History', '', '<ol class="list"><li class="is-now"><span>Request sent</span><span class="muted is-now">today</span></li><li class="is-later"><span>Fernhain Vorsorge confirms</span><span></span></li><li class="is-later"><span>Depot moves through Clearstream</span><span></span></li><li class="is-later"><span>Arrived at Fernhain Vorsorge</span><span></span></li></ol>') +
        '</div><p class="tracker-link"><a href="../wheres-my-trade/">Open it in the transfer tracker</a></p>' +
        '<button type="button" class="btn" data-step="4">Done</button></section>';
    }
    // done
    return '<section class="' + cls + ' center">' + appBar(TREE_MARK + '<b>My depot</b>', 'Nina, 18') + stepsBar(4) +
      '<p class="big">It’s yours. See you next year.</p>' +
      '<div class="done-tree">' + treeSVG(LEAVES.length, shownLeaves) + '</div>' +
      '<button type="button" class="text-link" data-step="0">Start the handover again</button></section>';
  }

  /* ---------- draw ---------- */

  function render() {
    var v = series();
    var m = monthsAt(s.age);
    $('screen').innerHTML = s.who === 'parent' ? parentScreen(v, m) : ninaScreen(v, m);
    if (document.querySelector('.tree')) growTree(s.who === 'nina' && s.age >= 18 ? LEAVES.length : leafCount(m));
    else shownLeaves = 0;
    wireChart(v, m);
    var next = $('check-next');
    if (next) setTimeout(function () { next.disabled = false; }, reduced ? 0 : 1600);
  }

  /* ---------- controls ---------- */

  var age = $('age');
  age.addEventListener('input', function () {
    s.age = +age.value;
    $('age-out').textContent = s.age;
    age.setAttribute('aria-valuetext', s.age + ' years old');
    if (stageOf(s.age) === 'numbers') s.tip += 1; // a new "Did you know" each visit
    if (s.age < 18) s.step = 0;
    s.back = false;
    render();
  });

  document.querySelectorAll('[data-who]').forEach(function (b) {
    b.addEventListener('click', function () {
      s.who = b.dataset.who;
      document.querySelectorAll('[data-who]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      shownLeaves = 0;
      render();
    });
  });

  $('screen').addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t) return;
    if (t.dataset.row) {
      s.open[t.dataset.row] = !s.open[t.dataset.row];
      t.setAttribute('aria-expanded', String(s.open[t.dataset.row]));
      t.nextElementSibling.hidden = !s.open[t.dataset.row];
      return;
    }
    if (t.dataset.topup) {
      s.topUp = Math.max(0, Math.min(100, s.topUp + +t.dataset.topup));
      render();
      return;
    }
    if (t.dataset.amount) {
      s.amount = +t.dataset.amount;
      render();
      return;
    }
    if (t.dataset.step !== undefined) {
      var to = +t.dataset.step;
      s.back = to < s.step && to !== 0;
      if (to === 0) shownLeaves = 0;
      s.step = to;
      render();
    }
  });

  render();
})();
