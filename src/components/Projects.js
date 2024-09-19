import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    { name: 'Notes API', description: 'Developed an API for taking and managing notes with MongoDB as the backend. Utilized JavaScript, Express.js, and MongoDB.' },
    { name: 'Scholarship Admin Panel', description: 'Developed an admin panel for managing scholarship applications using the MERN stack. Improved the efficiency of the application process.' },
    { name: 'Rapid-Q', description: 'Developed an NLP-based application for an insurance company to process and respond to user queries using Python, NLP, and Flask.' },
    { name: 'Driver-Drowsiness Detection System', description: 'Created an IoT system using Python, OpenCV, and Raspberry Pi to detect driver drowsiness and issue alerts.' },
    { name: 'URL Shortener', description: 'Developed a web application for shortening long URLs using Python, Flask, HTML, CSS, and JavaScript.' },
    { name: 'University Website', description: 'Created a front-end website for a hypothetical university using HTML, CSS, and JavaScript.' },
    { name: 'PDF-Tools Windows Software', description: 'Developed software for handling PDF files (encrypting, decrypting, splitting, merging) using Python and Tkinter.' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Projects;