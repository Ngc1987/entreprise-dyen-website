import { useState } from 'react';

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-[100] transform transition-transform duration-200 bg-primary text-white px-4 py-2 rounded-md focus:outline-none 
        ${isFocused ? 'translate-y-0' : '-translate-y-20'}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Aller au contenu principal
    </a>
  );
} 