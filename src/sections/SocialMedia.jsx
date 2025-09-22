import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alejandro-huertas73/',
      icon: '/assets/linkedin.svg',
      description: 'Connect with me professionally',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Alejandro2097',
      icon: '/assets/github.svg',
      description: 'Check out my projects and code',
      color: 'from-gray-700 to-gray-800',
      bgColor: 'bg-gray-700/10',
      borderColor: 'border-gray-700/20'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/alejo12381',
      icon: '/assets/twitter.svg',
      description: 'Follow me for updates and thoughts',
      color: 'from-sky-400 to-sky-500',
      bgColor: 'bg-sky-400/10',
      borderColor: 'border-sky-400/20'
    }
  ];

  return (
    <section className="c-space my-20" id="social">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* Background with 3D effect */}
        <div className="absolute inset-0 w-full h-full">
          <Canvas>
            <Suspense fallback={<CanvasLoader />}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              
              {/* Animated background elements */}
              <mesh position={[0, 0, -5]}>
                <sphereGeometry args={[50, 32, 32]} />
                <meshStandardMaterial color="#1a1a1a" wireframe />
              </mesh>
            </Suspense>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="head-text">Connect With Me</h2>
            <p className="text-lg text-white-600 mt-4 max-w-2xl mx-auto">
              Let's stay connected! Follow me on social media to see my latest projects, 
              thoughts on technology, and professional updates.
            </p>
          </div>

          {/* Social Media Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl p-8 ${social.bgColor} ${social.borderColor} border backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </h3>
                  
                  <p className="text-white-600 text-sm mb-4 group-hover:text-white-400 transition-colors duration-300">
                    {social.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-white-500 group-hover:text-white-400 transition-colors duration-300">
                    <span>Visit Profile</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia; 