import React from 'react';
import { Container, Typography, Paper, Chip, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function Skills() {
  const technicalSkills = [
    'Python', 'JavaScript', 'Java', 'Golang',
    'Flask', 'MERN Stack', 'Express.js', 'OpenCV', 'Tkinter',
    'MongoDB', 'Scapy', 'Docker', 'Git', 'Postman'
  ];

  const softSkills = [
    'Analytical Thinking', 'Creativity', 'Communication', 'Adaptability', 
    'Quick Learning', 'Teamwork'
  ];

  const SkillSection = ({ title, skills }) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Chip label={skill} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SkillSection title="Technical Skills" skills={technicalSkills} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillSection title="Soft Skills" skills={softSkills} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Skills;