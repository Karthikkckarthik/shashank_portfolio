import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

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
        const newOpacity = Math.max(0.7, 0.95 - (offset - 50) / 1000);
        setOpacity(newOpacity);
      } else {
        setIsScrolled(false);
        setOpacity(0.95);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (newValue) => {
    setValue(newValue);
    const element = document.getElementById(sections[newValue].toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        opacity: opacity,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
              onClose={handleClose}
            >
              {sections.map((section, index) => (
                <MenuItem key={section} onClick={() => handleChange(index)}>
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
                  component="div"
                  sx={{
                    mx: 1,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
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
                  <TouchRipple />
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