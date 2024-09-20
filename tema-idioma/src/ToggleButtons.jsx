import React from 'react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';

function ToggleButtons() {
  const { toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <div>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <button onClick={toggleLanguage}>Cambiar Idioma</button>
    </div>
  );
}

export default ToggleButtons;
