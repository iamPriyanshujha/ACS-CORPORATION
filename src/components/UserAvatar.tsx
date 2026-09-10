import React, { useState } from 'react';

interface UserAvatarProps {
  name: string;
  email?: string;
  picture?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  email,
  picture,
  className = '',
  size = 'md'
}) => {
  const [imageError, setImageError] = useState(false);

  // Generate clean initials from the user's name or email
  const getInitials = () => {
    if (!name && email) {
      return email.charAt(0).toUpperCase();
    }
    const clean = (name || '').trim();
    if (!clean) return 'U';
    const parts = clean.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
    }
    return clean.slice(0, 2).toUpperCase();
  };

  // Consistent color selection based on email or name
  const getBgColor = () => {
    const str = email || name || 'default';
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
      'bg-blue-600',
      'bg-sky-600',
      'bg-indigo-600',
      'bg-teal-600',
      'bg-cyan-600',
      'bg-slate-700'
    ];
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const sizeClasses = {
    sm: 'w-5 h-5 text-[10px]',
    md: 'w-8 h-8 text-xs',
    lg: 'w-10 h-10 text-sm font-bold',
    xl: 'w-14 h-14 text-lg font-bold'
  };

  const hasValidPicture = Boolean(picture && !imageError);

  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold text-white select-none overflow-hidden shrink-0 shadow-inner ${sizeClasses[size]} ${getBgColor()} ${className}`}
    >
      {hasValidPicture ? (
        <img
          src={picture}
          alt={name || 'User'}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="leading-none tracking-tight">{getInitials()}</span>
      )}
    </div>
  );
};
