import React from 'react';

export const CrochetIllustration = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-visible group">
      {/* Subtle background depth - integrated with page */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-rose/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-sage/15 rounded-full blur-[120px]" />
      </div>
      
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full max-w-[400px] overflow-visible" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="yarnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4a373" />
            <stop offset="100%" stopColor="#b08968" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The Yarn Ball - Starting Point */}
        <g transform="translate(80, 300)" className="animate-pulse-slow">
          {/* Stylized Yarn Ball */}
          <circle cx="0" cy="0" r="35" fill="#faedcd" stroke="#d4a373" strokeWidth="1.5" className="opacity-60" />
          {/* Yarn Texture Lines - Spiraling out */}
          <path d="M-20,-20 C-10,-30 10,-30 20,-20" stroke="#d4a373" strokeWidth="1" className="opacity-40" />
          <path d="M-25,0 C-15,-10 15,-10 25,0" stroke="#d4a373" strokeWidth="1" className="opacity-40" />
          <path d="M-20,20 C-10,10 10,10 20,20" stroke="#d4a373" strokeWidth="1" className="opacity-40" />
          <path d="M-5,-25 C5,-15 5,15 -5,25" stroke="#d4a373" strokeWidth="1" className="opacity-40" />
          <path d="M15,-15 C5,-5 5,5 15,15" stroke="#d4a373" strokeWidth="1" className="opacity-40" />
          {/* The thread "exit" point highlight */}
          <circle cx="0" cy="0" r="2" fill="#d4a373" className="opacity-30" />
        </g>

        {/* The Continuous Thread forming V and P - More fluid cursive and connected to yarn ball */}
        <path 
          d="M80,300 
             Q100,300 110,270 
             C130,210 150,120 170,120 
             C140,360 80,360 60,120 
             C50,40 110,40 150,120 
             M170,120 
             L210,120 
             C310,120 310,240 210,240 
             L210,380" 
          stroke="#d4a373" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#glow)"
          className="transition-all duration-1000 group-hover:stroke-accent-rose group-hover:stroke-[7px]"
        />

        {/* Minimalist accent dots */}
        <circle cx="340" cy="80" r="2" fill="#d4a373" className="opacity-30 animate-bounce-slow" />
        <circle cx="370" cy="110" r="1.5" fill="#d4a373" className="opacity-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
        <circle cx="350" cy="140" r="1" fill="#d4a373" className="opacity-15 animate-bounce-slow" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  );
};
