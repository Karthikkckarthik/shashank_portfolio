import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          },
        },
      },
    },
  },
});

const sectionStyle = {
  scrollMarginTop: '64px',
  paddingTop: '24px',
  paddingBottom: '24px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ paddingTop: '64px' }}>
        <Box id="summary" sx={sectionStyle}><Summary /></Box>
        <Box id="experience" sx={sectionStyle}><Experience /></Box>
        <Box id="projects" sx={sectionStyle}><Projects /></Box>
        <Box id="skills" sx={sectionStyle}><Skills /></Box>
        <Box id="education" sx={sectionStyle}><Education /></Box>
        <Box id="contact" sx={sectionStyle}><Contact /></Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;