import { useRef, useEffect } from 'react';

import Header from './components/Header';
import './App.css';
import Main from './components/Main';

const App = () => {
  const gradientRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      if (gradientRef.current) {
        gradientRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="__variable_20b187 group/spotlight relative">
      {/* Background Effect */}
      <div
        ref={gradientRef}
        className="pointer-events-none fixed inset-0 z-30"
      ></div>

      {/* Main Content */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
