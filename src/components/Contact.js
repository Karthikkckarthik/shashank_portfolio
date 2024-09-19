import React from 'react';
import { Container, Typography, Paper, Link, Box, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

function Contact() {
  const contactItems = [
    { icon: <PhoneIcon />, text: '+91 8073917763', link: 'tel:+918073917763' },
    { icon: <EmailIcon />, text: 'shashank.g2398@gmail.com', link: 'mailto:shashank.g2398@gmail.com' },
    { icon: <LinkedInIcon />, text: 'shashankag1', link: 'https://www.linkedin.com/in/shashankag1' },
    { icon: <GitHubIcon />, text: 'shashanka50', link: 'https://github.com/shashanka50/' },
  ];

  return (
    <Container maxWidth="md" sx={{ mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Contact Information
        </Typography>
        <Grid container spacing={2}>
          {contactItems.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2,
                    '&:hover': {
                      '& .MuiSvgIcon-root': {
                        color: 'primary.main',
                        transform: 'scale(1.2)',
                      },
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      mr: 2, 
                      color: 'text.secondary',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Link 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      color: 'text.primary', 
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <Typography variant="body1">
                      {item.text}
                    </Typography>
                  </Link>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Contact;