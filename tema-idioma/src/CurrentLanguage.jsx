import React from 'react';
import { useLanguage } from './LanguageContext';

function CurrentLanguage() {
  const { language } = useLanguage();

  return (
    <div>
      <h2>Idioma actual: {language === 'es' ? 'Español' : 'Inglés'}</h2>
    </div>
  );
}

export default CurrentLanguage;
