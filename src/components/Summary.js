import React from 'react';
import { Container, Typography, Paper, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Summary() {
  const roles = ['developer', 1000, 'CSE graduate', 1000];

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              alt="Shashanka G"
              src="/path/to/your/profile-picture.jpg"
              sx={{ width: 100, height: 100, mr: 3 }}
            />
            <Box>
              <Typography 
                variant="h4" 
                component={motion.h4} 
                whileHover={{ scale: 1.05 }}
                sx={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}
              >
                Shashanka G
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Typography 
                  variant="h6" 
                  component="span"
                  sx={{ 
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  I'm a
                </Typography>
                <Typography 
                  variant="h6" 
                  component="span" 
                  sx={{ 
                    ml: 1,
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 500,
                    color: theme => theme.palette.primary.main,
                  }}
                >
                  <TypeAnimation
                    sequence={roles}
                    wrapper="span"
                    speed={40}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontFamily: "'Roboto', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              Computer Science graduate with a solid foundation in software development and a passion for AI and machine learning. Demonstrated ability to solve real-world problems through multiple internships and projects.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                fontFamily: "'Roboto', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              Proficient in Python, JavaScript, Flask, and the MERN stack. Committed to ethical, innovative solutions and eager to join collaborative, learning-focused teams.
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                fontFamily: "'Roboto', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              Seeking a challenging role to leverage my skills and drive technological advancements in the field of software engineering.
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default Summary;