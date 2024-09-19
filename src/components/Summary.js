import React from 'react';
import { Container, Typography, Paper, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

function Summary() {
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
            <Typography variant="h3" component={motion.h3} whileHover={{ scale: 1.05 }}>
              Shashanka G
            </Typography>
          </Box>
          <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Typography variant="body1" paragraph>
              Computer Science graduate with a solid foundation in software development and a passion for AI and machine learning. Demonstrated ability to solve real-world problems through multiple internships and projects.
            </Typography>
            <Typography variant="body1" paragraph>
              Proficient in Python, JavaScript, Flask, and the MERN stack. Committed to ethical, innovative solutions and eager to join collaborative, learning-focused teams.
            </Typography>
            <Typography variant="body1">
              Seeking a challenging role to leverage my skills and drive technological advancements in the field of software engineering.
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default Summary;