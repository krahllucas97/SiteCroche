import React from 'react';

export const CrochetIllustration = () => {
  return (
    <div className="w-full h-full bg-white/40 rounded-[48px] flex items-center justify-center p-16 relative overflow-hidden shadow-xl border border-accent-rose/10 group">
      {/* Very subtle background depth */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-rose/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-sage/10 rounded-full blur-[100px]" />
      </div>
      
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full max-w-[300px]" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hookGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#A0522D" />
          </linearGradient>
          <linearGradient id="yarnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4a373" />
            <stop offset="100%" stopColor="#b08968" />
          </linearGradient>
        </defs>

        {/* The Yarn Ball - Starting Point */}
        <g transform="translate(60, 280)">
          {/* Stylized Yarn Ball */}
          <circle cx="0" cy="0" r="25" fill="#faedcd" stroke="#d4a373" strokeWidth="1" className="opacity-40" />
          {/* Yarn Texture Lines */}
          <path d="M-15,-15 Q0,-25 15,-15" stroke="#d4a373" strokeWidth="0.5" className="opacity-30" />
          <path d="M-20,0 Q0,-10 20,0" stroke="#d4a373" strokeWidth="0.5" className="opacity-30" />
          <path d="M-15,15 Q0,5 15,15" stroke="#d4a373" strokeWidth="0.5" className="opacity-30" />
          <path d="M-5,-20 Q5,0 -5,20" stroke="#d4a373" strokeWidth="0.5" className="opacity-30" />
        </g>

        {/* The Continuous Thread forming V and P */}
        <path 
          d="M85,280 
             C100,280 110,280 120,260 
             C140,220 160,180 180,180 
             C150,340 100,340 80,180 
             M180,180 
             L220,180 
             C300,180 300,280 220,280" 
          stroke="#d4a373" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-all duration-700 group-hover:stroke-text-mocha"
        />

        {/* The Crochet Hook - Forming the vertical stem of P */}
        <g transform="translate(220, 30)">
          {/* Hook Head - Integrated at the top of the P stem */}
          <path 
            d="M-4,110 
               Q-4,90 10,90 
               Q24,90 24,110 
               L24,120 
               Q24,130 10,130 
               L-4,120" 
            fill="url(#hookGrad)" 
            className="opacity-90"
          />
          
          {/* Hook Stem - The vertical line of the P */}
          <rect 
            x="-4" y="110" 
            width="8" height="240" 
            rx="4" 
            fill="url(#hookGrad)" 
            className="opacity-90"
          />
          
          {/* Subtle highlight on the hook */}
          <rect 
            x="-1" y="140" 
            width="2" height="180" 
            rx="1" 
            fill="white" 
            className="opacity-15"
          />
        </g>

        {/* Minimalist accent dots */}
        <circle cx="340" cy="120" r="1.2" fill="#d4a373" className="opacity-20" />
        <circle cx="355" cy="145" r="0.8" fill="#d4a373" className="opacity-15" />
      </svg>
    </div>
  );
};
