import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  darkTheme?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "h-9 w-auto",
  variant = 'full',
  darkTheme = false
}) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex items-center font-black tracking-tighter text-xl font-mono">
          <span className="text-red-600">H</span>
          <span className={darkTheme ? "text-white" : "text-slate-900"}>A</span>
          <span className="text-red-500 text-sm -ml-0.5">i</span>
        </div>
        {variant === 'full' && (
          <span className={`text-[10px] font-bold tracking-widest uppercase ${darkTheme ? 'text-slate-300' : 'text-slate-700'}`}>
            SOLUTIONS
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src="/logo.svg"
      alt="HAi SOLUTIONS Logo"
      className={`${className} object-contain`}
      onError={() => setImgError(true)}
    />
  );
};
