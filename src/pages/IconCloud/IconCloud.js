import React, { useEffect, useRef } from 'react';

const IconCloud = ({ images }) => {
  const cloudRef = useRef(null);

  useEffect(() => {
    if (!cloudRef.current) return;

    const container = cloudRef.current;
    const icons = container.querySelectorAll('.cloud-icon');
    
    // Create 3D sphere positioning
    const radius = 150;
    const total = icons.length;
    
    icons.forEach((icon, index) => {
      const phi = Math.acos(-1 + (2 * index) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      icon.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });

    // Add rotation animation
    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      container.style.transform = `rotateY(${rotation}deg) rotateX(${Math.sin(rotation * 0.01) * 10}deg)`;
      requestAnimationFrame(animate);
    };
    animate();

  }, [images]);

  return (
    <div className="relative w-80 h-80 mx-auto" style={{ perspective: '1000px' }}>
      <div
        ref={cloudRef}
        className="absolute inset-0 transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="cloud-icon absolute w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:bg-gray-700/70 transition-all duration-300"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-24px',
              marginTop: '-24px',
            }}
          >
            <img
              src={src}
              alt={`Technology ${index}`}
              className="w-8 h-8 object-contain filter brightness-0 invert"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const IconCloudDemo = () => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "figma",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${slug}.svg`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden py-20">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Technology Stack</h3>
        <IconCloud images={images} />
      </div>
    </div>
  );
};

export default IconCloud;