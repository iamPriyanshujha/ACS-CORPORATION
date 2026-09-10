import React from 'react';
// Imports your uploaded image from src/assets/
import logoImg from '../assets/images/ACS_logo.jpg';


interface ACSLogoProps {
  variant?: 'light' | 'dark' | 'header' | 'footer' | 'symbol' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ACSLogo: React.FC<ACSLogoProps> = ({ 
  variant = 'dark', 
  className = '',
  size = 'md' 
}) => {
  // Height sizing to fit Header, Footer, and Modals perfectly
  let heightClass = 'h-14 sm:h-12'; // Default 'md'

  if (variant === 'header' || size === 'sm') {
    heightClass = 'h-9 sm:h-10';
  } else if (size === 'lg') {
    heightClass = 'h-14 sm:h-16';
  } else if (size === 'xl') {
    heightClass = 'h-20 sm:h-24';
  }

  // Symbol badge
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img 
          src={logoImg} 
          alt="ACS Symbol" 
          className="w-8 h-8 object-contain rounded-xs" 
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none max-w-full ${className}`}>
      <img 
        src={logoImg} 
        alt="ACS Corporation" 
        className={`${heightClass} w-auto object-contain`} 
      />
    </div>
  );
};