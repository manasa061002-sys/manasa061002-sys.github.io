import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cubeImages } from '@/data/portfolio';

/**
 * An authentic 3x3x3 Rubik's Cube built with Three.js.
 * - Standard color scheme: white / yellow / red / orange / blue / green
 *   (white opposite yellow, red opposite orange, blue opposite green).
 * - Black plastic body with rounded sticker tiles for a classic premium feel.
 * - Some stickers carry image textures (lifestyle/travel/food) —
 *   user-swapable placeholders.
 * - Drag to rotate the whole cube.
 */
export default function RubiksCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // --- Lighting: warm key + cool fill + subtle rim for depth ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(6, 9, 7);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xb0c4de, 0.4);
    fillLight.position.set(-5, -3, 4);
    scene.add(fillLight);
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(-3, 5, -6);
    scene.add(rimLight);

    // --- Load image textures for photo stickers ---
    const loader = new THREE.TextureLoader();
    const textures = cubeImages.map((url) => {
      const tex = loader.load(url);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    });

    // --- Authentic Rubik's color scheme (Western standard) ---
    // Each face gets ONE consistent color — opposite pairs as on a real cube.
    const FACE_COLORS: Record<string, number> = {
      py: 0xffffff, // Up    → White
      ny: 0xffd500, // Down  → Yellow
      px: 0xb71234, // Right → Red
      nx: 0xff5800, // Left  → Orange
      pz: 0x0046ad, // Front → Blue
      nz: 0x009b48, // Back  → Green
    };

    // Sticker geometry — rounded-corner look via a slightly inset plane
    const stickerSize = 0.82;
    const stickerGeo = new THREE.PlaneGeometry(stickerSize, stickerSize);

    // Black plastic material for the cubie body
    const plasticMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.45,
      metalness: 0.05,
    });

    // Glossy sticker material factory
    const makeStickerMat = (color: number) =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.28,
        metalness: 0.0,
      });

    const makeImageMat = (tex: THREE.Texture) =>
      new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.3,
        metalness: 0.0,
      });

    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    const cubieSize = 0.94;
    const gap = 0.06;
    const step = 1 + gap;
    const stickerOffset = cubieSize / 2 + 0.002;

    // --- Build 27 cubies ---
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const cubie = new THREE.Group();
          cubie.position.set(x * step, y * step, z * step);

          // Rounded black plastic body
          const bodyGeo = new THREE.BoxGeometry(cubieSize, cubieSize, cubieSize);
          const body = new THREE.Mesh(bodyGeo, plasticMat);
          cubie.add(body);

          // Add stickers on outer faces only
          const faces: { key: keyof typeof FACE_COLORS; axis: 'x' | 'y' | 'z'; sign: number }[] = [];
          if (x === 1) faces.push({ key: 'px', axis: 'x', sign: 1 });
          if (x === -1) faces.push({ key: 'nx', axis: 'x', sign: -1 });
          if (y === 1) faces.push({ key: 'py', axis: 'y', sign: 1 });
          if (y === -1) faces.push({ key: 'ny', axis: 'y', sign: -1 });
          if (z === 1) faces.push({ key: 'pz', axis: 'z', sign: 1 });
          if (z === -1) faces.push({ key: 'nz', axis: 'z', sign: -1 });

          for (const face of faces) {
            // ~38% of stickers become image tiles (user-replaceable placeholders)
            const useImage = Math.random() < 0.38 && textures.length > 0;
            const mat = useImage
              ? makeImageMat(textures[Math.floor(Math.random() * textures.length)])
              : makeStickerMat(FACE_COLORS[face.key]);

            const sticker = new THREE.Mesh(stickerGeo, mat);

            if (face.axis === 'x') {
              sticker.position.x = face.sign * stickerOffset;
              sticker.rotation.y = face.sign * Math.PI / 2;
            } else if (face.axis === 'y') {
              sticker.position.y = face.sign * stickerOffset;
              sticker.rotation.x = -face.sign * Math.PI / 2;
            } else {
              sticker.position.z = face.sign * stickerOffset;
              if (face.sign < 0) sticker.rotation.y = Math.PI;
            }
            cubie.add(sticker);
          }

          cubeGroup.add(cubie);
        }
      }
    }

    // Classic viewing angle — shows three faces at once
    cubeGroup.rotation.x = -0.42;
    cubeGroup.rotation.y = 0.62;

    // --- Drag rotation ---
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let rotVelX = 0;
    let rotVelY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      renderer.domElement.style.cursor = 'grabbing';
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      rotVelY = dx * 0.006;
      rotVelX = dy * 0.006;
      cubeGroup.rotation.y += rotVelY;
      cubeGroup.rotation.x += rotVelX;
      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onPointerUp = () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    renderer.domElement.style.cursor = 'grab';
    renderer.domElement.style.touchAction = 'none';
    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointercancel', onPointerUp);

    // --- Animation loop with gentle idle spin ---
    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isDragging) {
        cubeGroup.rotation.y += rotVelY * 0.95 + 0.002;
        cubeGroup.rotation.x += rotVelX * 0.92;
        rotVelY *= 0.92;
        rotVelX *= 0.9;
      }
      renderer.render(scene, camera);
    };
    animate();

    // --- Resize ---
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointercancel', onPointerUp);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            (obj.material as THREE.Material)?.dispose();
          }
        }
      });
      textures.forEach((t) => t.dispose());
      stickerGeo.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" />;
}
