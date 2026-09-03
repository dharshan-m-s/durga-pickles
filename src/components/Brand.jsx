import React from 'react';

export default function Brand({compact=false}){
  return (
    <span className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="Durga Foods — Since 1996">
      <img src="/brand/durga-foods-logo.png" alt="Durga Foods — Since 1996" />
    </span>
  );
}
