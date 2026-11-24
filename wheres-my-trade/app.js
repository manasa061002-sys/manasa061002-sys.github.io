/* Where's my trade? A clickable prototype. Everything here is made-up data.
   The same state is drawn twice: once as the app, once as the website. */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };

  var STEPS = ['Request sent', 'Old broker received the request', 'Old broker sent the shares', 'Shares in transit (Clearstream)', 'Shares arrived in your account', 'Purchase prices received'];
  var STOPS = [
    { code: 'NHB', name: 'Nordhafen Bank' },
    { code: 'CLR', name: 'Clearstream' },
    { code: 'DEP', name: 'Your depot' },
  ];
  var POSITIONS = [
    { name: 'MSCI World ETF', isin: 'XX00FAKE0011' },
    { name: 'MSCI Emerging Markets ETF', isin: 'XX00FAKE0029' },
    { name: 'Europe Dividend ETF', isin: 'XX00FAKE0037' },
    { name: 'Siemens', isin: 'XX00FAKE0045' },
    { name: 'ASML', isin: 'XX00FAKE0052' },
  ];

  // stop: where the shares are (0 Nordhafen Bank, 1 Clearstream, 2 your depot).
  // at: the step each position is on (0 to 5), or 6 when it's completely done.
  var SITUATIONS = {
    smooth: {
      stop: 2,
      big: 'Your shares are in <em>your new depot</em>.',
      sub: 'All 5 positions arrived with their purchase prices on 11 Nov. Nothing to do.',
      stopNotes: ['left 6 Nov', 'passed 7 Nov', 'since 10 Nov'],
      dates: ['3 Nov', '4 Nov', '6 Nov', '7 Nov', '10 Nov', '11 Nov'],
      at: [6, 6, 6, 6, 6],
      days: [0, 0, 0, 0, 0],
      status: ['Arrived 7 Nov', 'Arrived 7 Nov', 'Arrived 10 Nov', 'Arrived 10 Nov', 'Arrived 10 Nov'],
      sum: 'all arrived',
    },
    stuck: {
      stop: 0,
      big: 'Your shares are still at <em>Nordhafen Bank</em>.',
      sub: '3 days later than usual. You don’t need to do anything.',
      stopNotes: ['waiting, day 8', 'next', ''],
      dates: ['3 Nov', 'since 3 Nov', '', '', '', ''],
      at: [1, 1, 1, 1, 1],
      days: [8, 8, 8, 8, 8],
      status: ['At Nordhafen Bank', 'At Nordhafen Bank', 'At Nordhafen Bank', 'At Nordhafen Bank', 'At Nordhafen Bank'],
      sum: 'all at Nordhafen Bank',
      card:
        '<p>Nordhafen Bank hasn’t confirmed yet. Usually that takes 2 to 5 days. This is day 8.</p>' +
        '<p>We reminded them on 11 Nov and will chase again on 17 Nov.</p>' +
        '<p><b>Nothing to do.</b> To speed it up, call them with your reference.</p>' +
        '<button type="button" class="btn" data-copy="DT-2026-0481">Copy reference</button>',
    },
    prices: {
      stop: 2,
      big: 'Your shares are in <em>your new depot</em>.',
      sub: '2 of 5 are still missing their purchase prices.',
      stopNotes: ['left 6 Nov', 'passed 7 Nov', 'since 10 Nov'],
      dates: ['3 Nov', '4 Nov', '6 Nov', '7 Nov', '10 Nov', 'since 10 Nov'],
      at: [6, 6, 6, 5, 5],
      days: [0, 0, 0, 4, 4],
      status: ['Arrived 7 Nov', 'Arrived 7 Nov', 'Arrived 10 Nov', 'Price missing', 'Price missing'],
      sum: '2 prices missing',
      card:
        '<p>Nordhafen Bank hasn’t sent what you paid for Siemens and ASML.</p>' +
        '<p>We’ve asked. It usually takes up to 2 weeks.</p>' +
        '<p><b>Wait before selling those two.</b> Sell now and more tax is taken for the time being.</p>' +
        '<button type="button" class="btn" data-toast="We’ll tell you when the prices arrive.">Tell me when they arrive</button>',
    },
  };

  var st = { situation: 'smooth', view: 'client', screen: 'transfer', open: {}, landed: false, lastStop: 2 };

  /* ---------- pieces shared by both versions ---------- */

  // A rail line with three stations. The red marker is where the shares are.
  function route(s, from) {
    var pct = function (i) { return i * 50 + '%'; };
    var cls = function (i) { return i < s.stop ? 'is-passed' : i === s.stop ? 'is-here' : ''; };
    var stations = STOPS.map(function (p, i) { return '<span class="station ' + cls(i) + '" style="left:' + pct(i) + '"></span>'; }).join('');
    var names = STOPS.map(function (p, i) {
      return '<li class="' + cls(i) + '"><span class="code">' + p.code + '</span><span class="stop-name">' + p.name + '</span><span class="stop-note">' + (s.stopNotes[i] || '') + '</span></li>';
    }).join('');
    return (
      '<div class="route" aria-hidden="true"><div class="rail"><span class="rail-done" data-to="' + pct(s.stop) + '" style="width:' + pct(from) + '"></span></div>' +
      stations + '<span class="marker" data-to="' + pct(s.stop) + '" style="left:' + pct(from) + '"></span></div>' +
      '<ol class="stops" aria-label="Where your shares are">' + names + '</ol>'
    );
  }

  function answer(s) {
    var stamp = st.situation === 'smooth' ? '<span class="stamp' + (st.landed ? ' is-still' : '') + '">Arrived</span>' : '';
    return '<div class="answer"><p class="big">' + s.big + '</p>' + stamp + '</div><p class="sub">' + s.sub + '</p>';
  }

  function positionsList(s) {
    return '<ul class="list">' + POSITIONS.map(function (p, i) {
      var flag = s.at[i] === 5 || st.situation === 'stuck';
      return '<li><span>' + p.name + '</span><span class="muted' + (flag ? ' is-now' : '') + '">' + s.status[i] + '</span></li>';
    }).join('') + '</ul>';
  }

  function historyList(s) {
    var reached = Math.min.apply(null, s.at);
    return '<ol class="list">' + STEPS.map(function (step, i) {
      var cls = i < reached ? '' : i === reached ? 'is-now' : 'is-later';
      var date = i <= reached ? s.dates[i] : '';
      return '<li class="' + cls + '"><span>' + step + '</span><span class="muted ' + cls + '">' + date + '</span></li>';
    }).join('') + '</ol>';
  }

  var ORDER = '<button type="button" class="order" data-open="pending" aria-label="Siemens, 4 shares bought Monday 10 Nov, pending. Why does it say pending?">' +
    '<span class="order-text"><span>Siemens, 4 shares</span><span class="order-sub">Bought Mon 10 Nov</span></span>' +
    '<span class="pending-tag">Pending</span><span class="chev is-right" aria-hidden="true"></span></button>';

  function row(id, label, right, body) {
    var open = !!st.open[id];
    return '<div class="row"><button type="button" data-row="' + id + '" aria-expanded="' + open + '"><span>' + label + '</span><span><span class="muted">' + (right || '') + '</span><span class="chev" aria-hidden="true"></span></span></button>' +
      '<div class="row-body"' + (open ? '' : ' hidden') + '>' + body + '</div></div>';
  }

  var DAYS = '<ol class="days" aria-label="Business days">' +
    '<li><span class="day">Mon</span><span class="day-note">You bought</span></li>' +
    '<li class="is-today"><span class="day">Tue</span><span class="day-note">Today</span></li>' +
    '<li class="is-done"><span class="day">Wed</span><span class="day-note">Yours for good</span></li></ol>';
  var PENDING_BIG = '<p class="big">You bought on Monday. It’s yours for good on <em>Wednesday</em>.</p>';
  var PENDING_SUB = '<p class="sub">Shares and money officially swap 2 business days after you buy. From October 2027 the EU moves to 1 business day (T+1).</p>';

  /* ---------- the app ---------- */

  function appTransfer(s, from) {
    return '<div class="app">' +
      '<div class="app-bar"><span>Depot transfer</span><span class="mono">DT-2026-0481</span></div>' +
      answer(s) + route(s, from) +
      (s.card ? '<div class="card" role="note">' + s.card + '</div>' : '') +
      '<div class="rows">' + row('positions', '5 positions', s.sum, positionsList(s)) + row('history', 'Transfer history', '', historyList(s)) + '</div>' +
      '<p class="order-label">Your last order</p>' + ORDER + '</div>';
  }
  function appPending() {
    return '<div class="app">' +
      '<div class="app-bar"><button type="button" class="back" data-open="transfer">‹ Back</button><span>Siemens · 4 shares · <span class="pending-tag">Pending</span></span></div>' +
      PENDING_BIG + DAYS + PENDING_SUB + '</div>';
  }

  /* ---------- the website: the same content, with room to show it all ---------- */

  var WEB_NAV = '<nav class="web-nav" aria-hidden="true"><b>Broker</b><span>Portfolio</span><span class="is-on">Depot transfer</span><span>Orders</span></nav>';

  function webTransfer(s, from) {
    return WEB_NAV + '<div class="web-body">' +
      '<div class="web-main"><p class="web-crumb">Depot transfer <span class="mono">DT-2026-0481</span></p>' +
      answer(s) + route(s, from) +
      (s.card ? '<div class="card" role="note">' + s.card + '</div>' : '') + '</div>' +
      '<aside class="web-side">' +
      '<h3>5 positions <span class="muted">' + s.sum + '</span></h3>' + positionsList(s) +
      '<h3>Transfer history</h3>' + historyList(s) +
      '<h3>Your last order</h3>' + ORDER +
      '</aside></div>';
  }
  function webPending() {
    return WEB_NAV + '<div class="web-body">' +
      '<div class="web-main"><p class="web-crumb"><button type="button" class="back" data-open="transfer">‹ Back to depot transfer</button></p>' +
      PENDING_BIG + DAYS + PENDING_SUB + '</div>' +
      '<aside class="web-side"><h3>Your order <span class="pending-tag">Pending</span></h3>' +
      '<ul class="list"><li><span>Share</span><span class="muted">Siemens</span></li><li><span>Quantity</span><span class="muted">4</span></li><li><span>Price</span><span class="muted">€112.40</span></li><li><span>Total</span><span class="muted">€449.60</span></li><li><span>Bought</span><span class="muted">Mon 10 Nov, 09:14</span></li></ul>' +
      '</aside></div>';
  }

  /* ---------- ops ---------- */

  function renderOps() {
    var s = SITUATIONS[st.situation];
    var limit = parseInt($('limit').value, 10) || 5;
    $('ops-rows').innerHTML = POSITIONS.map(function (p, i) {
      var at = s.at[i];
      var done = at >= STEPS.length;
      var days = done ? null : s.days[i];
      var flagged = days !== null && days > limit;
      return '<tr><th scope="row">' + p.name + '</th><td class="mono">' + p.isin + '</td>' +
        '<td>' + (done ? 'Done' : at + 1 + '. ' + STEPS[at]) + '</td>' +
        '<td class="num">' + (days === null ? '' : days) + '</td>' +
        '<td>' + (flagged ? '<span class="flag">Over ' + limit + ' days</span>' : '') + '</td></tr>';
    }).join('');
  }

  /* ---------- draw ---------- */

  function press(sel, attr, value) {
    document.querySelectorAll(sel).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute(attr) === value)); });
  }

  function render() {
    var s = SITUATIONS[st.situation];
    var from = st.lastStop;
    var ops = st.screen === 'transfer' && st.view === 'ops';
    document.querySelectorAll('.device').forEach(function (d) { d.hidden = ops; });
    $('ops').hidden = !ops;
    $('proto').classList.toggle('is-quiet', st.screen !== 'transfer');
    press('[data-screen]', 'data-screen', st.screen);

    if (st.screen === 'transfer') {
      $('app').innerHTML = appTransfer(s, from);
      $('web').innerHTML = webTransfer(s, from);
      if (st.situation === 'smooth') st.landed = true;
      st.lastStop = s.stop;
    } else {
      $('app').innerHTML = appPending();
      $('web').innerHTML = webPending();
    }

    // slide the marker from where it was to where the shares are now
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.querySelectorAll('.marker').forEach(function (m) { m.style.left = m.dataset.to; });
        document.querySelectorAll('.rail-done').forEach(function (r) { r.style.width = r.dataset.to; });
      });
    });
    renderOps();
  }

  /* ---------- controls ---------- */

  document.querySelectorAll('[data-situation]').forEach(function (b) {
    b.addEventListener('click', function () {
      st.situation = b.dataset.situation;
      press('[data-situation]', 'data-situation', st.situation);
      render();
    });
  });
  document.querySelectorAll('[data-view]').forEach(function (b) {
    b.addEventListener('click', function () {
      st.view = b.dataset.view;
      press('[data-view]', 'data-view', st.view);
      render();
    });
  });
  document.querySelectorAll('[data-screen]').forEach(function (b) {
    b.addEventListener('click', function () {
      st.screen = b.dataset.screen;
      render();
    });
  });
  $('limit').addEventListener('input', renderOps);

  var toastTimer = 0;
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 2200);
  }

  $('stage').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.open) {
      st.screen = b.dataset.open;
      render();
    } else if (b.dataset.row) {
      var id = b.dataset.row;
      st.open[id] = !st.open[id];
      b.setAttribute('aria-expanded', String(st.open[id]));
      b.nextElementSibling.hidden = !st.open[id];
    } else if (b.dataset.copy) {
      var text = b.dataset.copy;
      var ok = function () { toast('Copied ' + text); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(ok, ok);
      else ok();
    } else if (b.dataset.toast) {
      toast(b.dataset.toast);
    }
  });

  if (location.hash === '#pending') st.screen = 'pending';
  render();
})();
