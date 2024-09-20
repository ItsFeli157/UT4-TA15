import React from 'react';
import { useTheme } from './ThemeContext';

function CurrentTheme() {
  const { theme } = useTheme(); 

  return (
    <div>
      <h2>Tema actual: {theme === 'light' ? 'Claro' : 'Oscuro'}</h2>
    </div>
  );
}

export default CurrentTheme;
