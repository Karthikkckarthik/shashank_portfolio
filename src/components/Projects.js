import React, { useState } from 'react';
import { Container, Typography, Paper, Box, Grid, Card, CardContent, IconButton, Chip } from '@mui/material';
import { motion } from 'framer-motion';
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
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ perspective: '1000px' }}
      >
        <Box
          sx={{
            width: '100%',
            height: 250,
            position: 'relative',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            '&:hover': {
              transform: 'rotateY(180deg)',
            },
          }}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          {/* Front of the card */}
          <Card
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
            }}
          >
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
          </Card>

          {/* Back of the card */}
          <Card
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 2,
            }}
          >
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
          </Card>
        </Box>
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