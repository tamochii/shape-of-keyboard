import React from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  active?: boolean;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  as: Component = 'span', 
  className = '', 
  active = true 
}) => {
  if (!active) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component 
      className={`relative inline-block glitch-text ${className}`} 
      title={text}
      data-text={text}
    >
      {text}
    </Component>
  );
};