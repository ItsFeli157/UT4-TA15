import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import CurrentTheme from './CurrentTheme';
import CurrentLanguage from './CurrentLanguage';
import ToggleButtons from './ToggleButtons';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <CurrentTheme />
          <CurrentLanguage />
          <ToggleButtons />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
