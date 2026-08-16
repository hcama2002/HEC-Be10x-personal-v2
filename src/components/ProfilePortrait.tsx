import React, { useState, useEffect } from 'react';
import { Camera, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfilePortraitProps {
  sizeClass?: string;
  showStatusBadge?: boolean;
  allowUpload?: boolean;
  className?: string;
}

export const ProfilePortrait: React.FC<ProfilePortraitProps> = ({
  sizeClass = "w-36 h-36 sm:w-40 sm:h-40",
  showStatusBadge = true,
  allowUpload = false,
  className = "",
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  // Load user custom uploaded portrait if saved in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('h_ai_custom_portrait');
      if (saved) {
        setCustomPhoto(saved);
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          setImageError(false);
          try {
            localStorage.setItem('h_ai_custom_portrait', result);
          } catch {
            // storage limit fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto(null);
    setImageError(false);
    try {
      localStorage.removeItem('h_ai_custom_portrait');
    } catch {
      // ignore
    }
  };

  const imageSrc = customPhoto || PERSONAL_INFO.photoUrl || '/havovy-cama.svg';

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer Glow / Framing Ring */}
      <div className={`${sizeClass} rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-900 p-1 shadow-md flex items-center justify-center relative group`}>
        <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
          
          {!imageError ? (
            <img
              src={imageSrc}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={() => {
                // If specific url failed, fallback to default svg asset
                if (imageSrc !== '/havovy-cama.svg') {
                  setImageError(true);
                }
              }}
            />
          ) : (
            <img
              src="/havovy-cama.svg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          )}

          {/* Upload overlay hover trigger if enabled */}
          {allowUpload && (
            <label 
              htmlFor="photo-upload-input"
              className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-xs font-semibold text-white p-2 text-center"
              title="Update profile photo"
            >
              <Camera className="w-5 h-5 mb-1 text-sky-400" />
              <span>Change Photo</span>
              <input
                id="photo-upload-input"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          )}

          {/* Reset custom photo button if custom is set */}
          {customPhoto && (
            <button
              type="button"
              onClick={handleResetPhoto}
              title="Reset to default portrait"
              className="absolute top-1.5 right-1.5 p-1 rounded-md bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-900 transition-all z-20"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Active Status Badge */}
      {showStatusBadge && (
        <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-2.5 py-1 border border-slate-200 shadow-xs flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for SMEs</span>
        </div>
      )}
    </div>
  );
};
