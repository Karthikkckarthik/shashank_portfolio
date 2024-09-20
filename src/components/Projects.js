import React, { useState } from 'react';
import { Container, Typography, Paper, Box, Grid, Card, CardContent, IconButton, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  const projects = [
    { 
      name: 'Notes API', 
      description: 'Developed an API for taking and managing notes with MongoDB as the backend.',
      technologies: ['JavaScript', 'Express.js', 'MongoDB'],
      github: 'https://github.com/yourusername/notes-api'
    },
    { 
      name: 'Scholarship Admin Panel', 
      description: 'Developed an admin panel for managing scholarship applications using the MERN stack.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/yourusername/scholarship-admin'
    },
    { 
      name: 'Rapid-Q', 
      description: 'Developed an NLP-based application for an insurance company to process and respond to user queries.',
      technologies: ['Python', 'NLP', 'Flask'],
      github: 'https://github.com/yourusername/rapid-q'
    },
    { 
      name: 'Driver-Drowsiness Detection System', 
      description: 'Created an IoT system to detect driver drowsiness and issue alerts.',
      technologies: ['Python', 'OpenCV', 'Raspberry Pi'],
      github: 'https://github.com/yourusername/driver-drowsiness'
    },
    { 
      name: 'URL Shortener', 
      description: 'Developed a web application for shortening long URLs.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/url-shortener'
    },
    { 
      name: 'University Website', 
      description: 'Created a front-end website for a hypothetical university.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/university-website'
    },
    { 
      name: 'PDF-Tools Windows Software', 
      description: 'Developed software for handling PDF files (encrypting, decrypting, splitting, merging).',
      technologies: ['Python', 'Tkinter'],
      github: 'https://github.com/yourusername/pdf-tools'
    },
  ];

  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            height: 250,
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Front of the card */}
          <CardContent>
            <Typography 
              variant="h6" 
              component="div" 
              gutterBottom
              sx={{ 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '1.2rem',
                color: theme => theme.palette.primary.main,
              }}
            >
              {project.name}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </Typography>
          </CardContent>

          {/* Back of the card (Curtain effect) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
                }}
              >
                <Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ 
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: theme => theme.palette.secondary.main,
                    }}
                  >
                    Technologies:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                        size="small"
                        sx={{
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <IconButton 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      backgroundColor: 'primary.main',
                      color: 'white',
                      '&:hover': { backgroundColor: 'primary.dark' },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    );
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            color: theme => theme.palette.primary.dark,
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Projects;