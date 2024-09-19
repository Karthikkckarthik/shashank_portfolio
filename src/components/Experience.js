import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    company: "CodeIO",
    position: "Backend Developer",
    duration: "Apr 2024 - May 2024 (2 months)",
    details: [
      "Developed an admin panel for managing scholarship applications using the MERN stack.",
      "Improved the efficiency of the scholarship application process, resulting in better data management and user experience.",
      "Collaborated with a cross-functional team to ensure seamless integration and functionality."
    ]
  },
  {
    company: "Hewlett Packard Enterprise",
    position: "Intern",
    duration: "Jan 2023 - June 2023 (6 months)",
    details: [
      "Developed a software application to identify servers connected in a LAN, displaying server information such as IP, MAC address, vendor, and serial number.",
      "Utilized programming languages including Python, JavaScript, Java, and Golang, and tools such as Flask, Scapy, CentOS, JQuery, and DHCP-DORA.",
      "Enhanced network management capabilities, improving server tracking and identification."
    ]
  }
];

function Experience() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Work Experience
        </Typography>
        <Grid container spacing={2}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <ExperienceCard experience={exp} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

function ExperienceCard({ experience }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Paper 
        elevation={2}
        sx={{
          p: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h6">{experience.company}</Typography>
          <Typography variant="subtitle1">{experience.position}</Typography>
          <Typography variant="body2" color="text.secondary">{experience.duration}</Typography>
        </Box>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '16px 0',
                marginTop: '8px',
                zIndex: 2,
              }}
            >
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {experience.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Typography variant="body2" paragraph>{detail}</Typography>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Paper>
    </motion.div>
  );
}

export default Experience;