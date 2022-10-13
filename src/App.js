import React, { useState } from 'react';
import Routes from './services/Routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Global/GlobalStyle/GlobalStyle';
import { lightTheme, darkTheme } from './Global/Theme/Theme'
import * as S from './Global/GlobalStyle/GlobalStyle'

export default function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <S.Toggler onClick={() => themeToggler()}>
        <S.SwitchToggle type='checkbox' />
      </S.Toggler>
      <Routes />
    </ThemeProvider>
  )
}