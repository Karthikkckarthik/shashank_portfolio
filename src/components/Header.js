import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const sections = ['Summary', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

function Header() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [opacity, setOpacity] = useState(0.95);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
        // Calculate opacity based on scroll position
        const newOpacity = Math.max(0.7, 0.95 - (offset - 50) / 1000);
        setOpacity(newOpacity);
      } else {
        setIsScrolled(false);
        setOpacity(0.95);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (index) => {
    setValue(index);
    const element = document.getElementById(sections[index].toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (index) => {
    setAnchorEl(null);
    if (typeof index === 'number') {
      handleChange(index);
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: `linear-gradient(45deg, rgba(30,136,229,${opacity}), rgba(255,64,129,${opacity}))`,
        transition: 'all 0.3s ease-in-out',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            flexGrow: 1, 
            fontFamily: 'Playfair Display, serif', 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Shashanka G
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={() => handleClose()}
            >
              {sections.map((section, index) => (
                <MenuItem key={section} onClick={() => handleClose(index)}>
                  {section}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            {sections.map((section, index) => (
              <motion.div
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  variant="button"
                  sx={{
                    mx: 2,
                    cursor: 'pointer',
                    position: 'relative',
                    color: 'white',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: theme.palette.secondary.main,
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                  onClick={() => handleChange(index)}
                >
                  {section}
                </Typography>
              </motion.div>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;