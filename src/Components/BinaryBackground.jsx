import React, { useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Función para ajustar el tamaño del canvas y pintar el fondo inicial oscuro
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // --- CORRECCIÓN 1: Fondo inicial oscuro ---
      // Esto asegura que el lienzo comience siendo negro, no transparente/blanco
      ctx.fillStyle = '#0a0a0a'; // Un negro muy oscuro
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Llamada inicial

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      // Fondo negro semitransparente para el rastro
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.round(Math.random());
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // --- EFECTO FLICKER ---
        // Generamos una opacidad aleatoria entre 0.3 y 1 para cada número
        // Esto hace que algunos números parezcan estar "fallando" o brillando más
        const flicker = Math.random() > 0.9 ? Math.random() * 0.5 + 0.5 : 0.8;
        ctx.fillStyle = `rgba(16, 185, 129, ${flicker})`; // Verde esmeralda con opacidad dinámica

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // Aprox 30 FPS

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Se queda al fondo de todo
        opacity: 0.9, // Casi opaco para que el fondo oscuro domine
        pointerEvents: 'none' // Para que no interfiera con los clics en la web
      }}
    />
  );
};

export default BinaryBackground;