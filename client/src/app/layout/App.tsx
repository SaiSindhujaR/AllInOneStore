import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Product } from '../models/product';
import Catalog from '../../features/Catalog/Catalog';
import { Container, CssBaseline, createTheme } from '@mui/material';
import Header from './Header';
import { Palette } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [darkMode,setDarkMode]=useState(false);
  const paletteType=darkMode?'dark':'light';

  const theme=createTheme({
    palette:{
      mode:paletteType,
      background:{
        default: paletteType==='light'?'#eaeaea':'#121212'
      }
    }
  }
    
  )

  function handleThemeChange()
  {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog />
      </Container>
      </ThemeProvider>
      
     
    </>
  );
}

export default App;
