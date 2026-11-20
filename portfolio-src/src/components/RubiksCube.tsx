import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cubeImages } from '@/data/portfolio';

/**
 * A 3x3x3 Rubik's cube in three.js that keeps scrambling and solving itself.
 * - Standard colours, with some stickers showing photos (small thumbnails).
 *   Photos are fixed to their stickers, so a solved cube looks the same each time.
 * - Drag to spin the whole cube.
 * - Rendering pauses while the cube is off-screen or the tab is hidden.
 * - With prefers-reduced-motion it stays solved and still (drag still works).
 */

type Axis = 'x' | 'y' | 'z';
type Move = { axis: Axis; layer: -1 | 1; dir: 1 | -1 };

const FACE_COLORS: Record<string, number> = {
  py: 0xffffff, // Up    → White
  ny: 0xffd500, // Down  → Yellow
  px: 0xb71234, // Right → Red
  nx: 0xff5800, // Left  → Orange
  pz: 0x0046ad, // Front → Blue
  nz: 0x009b48, // Back  → Green
};

function randomScramble(n: number): Move[] {
  const axes: Axis[] = ['x', 'y', 'z'];
  const out: Move[] = [];
  while (out.length < n) {
    const m: Move = {
      axis: axes[Math.floor(Math.random() * 3)],
      layer: Math.random() < 0.5 ? -1 : 1,
      dir: Math.random() < 0.5 ? -1 : 1,
    };
    const prev = out[out.length - 1];
    if (prev && prev.axis === m.axis && prev.layer === m.layer) continue;
    out.push(m);
  }
  return out;
}

// Small deterministic random, so photo placement is the same on every visit.
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function RubiksCube({ onReady }: { onReady?: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(6, 9, 7);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xb0c4de, 0.4);
    fillLight.position.set(-5, -3, 4);
    scene.add(fillLight);

    // Re-render once each photo arrives (matters when the loop is paused).
    const loader = new THREE.TextureLoader();
    const textures = cubeImages.map((url) => {
      const tex = loader.load(url, () => renderer.render(scene, camera));
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    });

    const stickerGeo = new THREE.PlaneGeometry(0.84, 0.84);
    const bodyGeo = new THREE.BoxGeometry(0.94, 0.94, 0.94);
    const plasticMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.45 });
    const stickerMats: Record<string, THREE.Material> = {};
    for (const k of Object.keys(FACE_COLORS)) {
      stickerMats[k] = new THREE.MeshStandardMaterial({ color: FACE_COLORS[k], roughness: 0.3 });
    }
    const imageMats = textures.map((t) => new THREE.MeshStandardMaterial({ map: t, roughness: 0.3 }));
    const rand = seeded(7);

    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);
    const step = 1.06;
    const off = 0.94 / 2 + 0.002;
    const cubies: THREE.Group[] = [];

    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) {
          const cubie = new THREE.Group();
          cubie.position.set(x * step, y * step, z * step);
          cubie.add(new THREE.Mesh(bodyGeo, plasticMat));
          const faces: { key: string; axis: Axis; sign: number }[] = [];
          if (x === 1) faces.push({ key: 'px', axis: 'x', sign: 1 });
          if (x === -1) faces.push({ key: 'nx', axis: 'x', sign: -1 });
          if (y === 1) faces.push({ key: 'py', axis: 'y', sign: 1 });
          if (y === -1) faces.push({ key: 'ny', axis: 'y', sign: -1 });
          if (z === 1) faces.push({ key: 'pz', axis: 'z', sign: 1 });
          if (z === -1) faces.push({ key: 'nz', axis: 'z', sign: -1 });
          for (const f of faces) {
            // ~38% of stickers carry a photo
            const photo = imageMats.length > 0 && rand() < 0.38;
            const mat = photo ? imageMats[Math.floor(rand() * imageMats.length)] : stickerMats[f.key];
            const s = new THREE.Mesh(stickerGeo, mat);
            if (f.axis === 'x') {
              s.position.x = f.sign * off;
              s.rotation.y = (f.sign * Math.PI) / 2;
            } else if (f.axis === 'y') {
              s.position.y = f.sign * off;
              s.rotation.x = (-f.sign * Math.PI) / 2;
            } else {
              s.position.z = f.sign * off;
              if (f.sign < 0) s.rotation.y = Math.PI;
            }
            cubie.add(s);
          }
          cubeGroup.add(cubie);
          cubies.push(cubie);
        }

    cubeGroup.rotation.x = 0.42;
    cubeGroup.rotation.y = -0.62;
    renderer.render(scene, camera);
    onReady?.();

    // ---------- Layer turns ----------
    const pivot = new THREE.Group();
    cubeGroup.add(pivot);
    const snap = new THREE.Matrix4();
    let current: { move: Move; t: number } | null = null;
    let queue: Move[] = [];
    let holdUntil = 0;
    let phase: 'scramble' | 'solve' = 'scramble';
    let lastScramble: Move[] = [];
    const MOVE_MS = 300;

    const startMove = (move: Move) => {
      pivot.rotation.set(0, 0, 0);
      pivot.updateMatrixWorld();
      for (const c of cubies) {
        if (Math.round(c.position[move.axis] / step) === move.layer) pivot.attach(c);
      }
      current = { move, t: 0 };
    };

    const endMove = () => {
      if (!current) return;
      pivot.rotation[current.move.axis] = (current.move.dir * Math.PI) / 2;
      pivot.updateMatrixWorld();
      for (const c of [...pivot.children]) {
        cubeGroup.attach(c);
        c.position.set(
          Math.round(c.position.x / step) * step,
          Math.round(c.position.y / step) * step,
          Math.round(c.position.z / step) * step,
        );
        snap.makeRotationFromQuaternion(c.quaternion);
        const e = snap.elements;
        for (let i = 0; i < 16; i++) e[i] = Math.round(e[i]);
        c.quaternion.setFromRotationMatrix(snap);
      }
      current = null;
    };

    const nextMove = (now: number) => {
      if (queue.length) {
        startMove(queue.shift()!);
        return;
      }
      if (phase === 'scramble') {
        lastScramble = randomScramble(9);
        queue = [...lastScramble];
        phase = 'solve';
        holdUntil = now + 1800;
      } else {
        queue = [...lastScramble].reverse().map((m) => ({ ...m, dir: (m.dir * -1) as 1 | -1 }));
        phase = 'scramble';
        holdUntil = now + 1400;
      }
    };

    // ---------- Drag to spin ----------
    let dragging = false;
    let prevX = 0;
    let prevY = 0;
    let velX = 0;
    let velY = 0;
    const el = renderer.domElement;
    el.style.cursor = 'grab';
    el.style.touchAction = 'pan-y';

    const onDown = (e: PointerEvent) => {
      dragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = 'grabbing';
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      velY = (e.clientX - prevX) * 0.006;
      velX = (e.clientY - prevY) * 0.006;
      cubeGroup.rotation.y += velY;
      cubeGroup.rotation.x += velX;
      prevX = e.clientX;
      prevY = e.clientY;
      wake();
    };
    const onUp = () => {
      dragging = false;
      el.style.cursor = 'grab';
    };
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);

    // ---------- Loop (only while visible) ----------
    let raf = 0;
    let visible = false;
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (!reduced) {
        if (current) {
          current.t = Math.min(1, current.t + dt / MOVE_MS);
          pivot.rotation.set(0, 0, 0);
          pivot.rotation[current.move.axis] = (current.move.dir * Math.PI * easeInOut(current.t)) / 2;
          if (current.t >= 1) endMove();
        } else if (now >= holdUntil) {
          nextMove(now);
        }
        if (!dragging) {
          cubeGroup.rotation.y += velY * 0.95 + 0.0025;
          cubeGroup.rotation.x += velX * 0.92;
        }
      } else if (!dragging) {
        cubeGroup.rotation.y += velY;
        cubeGroup.rotation.x += velX;
      }
      velY *= 0.92;
      velX *= 0.9;
      renderer.render(scene, camera);
      const settled = reduced && !dragging && Math.abs(velX) + Math.abs(velY) < 0.0005;
      raf = visible && !settled ? requestAnimationFrame(frame) : 0;
    };
    function wake() {
      if (!raf && visible) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
      if (visible) wake();
    });
    io.observe(mount);
    const onVis = () => {
      visible = !document.hidden && mount.getBoundingClientRect().bottom > 0;
      if (visible) wake();
    };
    document.addEventListener('visibilitychange', onVis);

    const ro = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.render(scene, camera);
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      renderer.dispose();
      stickerGeo.dispose();
      bodyGeo.dispose();
      plasticMat.dispose();
      Object.values(stickerMats).forEach((m) => m.dispose());
      imageMats.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      if (el.parentNode === mount) mount.removeChild(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={mountRef} className="h-full w-full" />;
}
