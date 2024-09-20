import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

function Education() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                  B.E in Computer Science and Engineering
                </Typography>
              }
              secondary={
                <Typography variant="body1" sx={{ fontFamily: "'Lato', sans-serif" }}>
                  BMSCE - 9.24 GPA
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                  XII PCMC
                </Typography>
              }
              secondary={
                <Typography variant="body1" sx={{ fontFamily: "'Lato', sans-serif" }}>
                  RVK-BSK - 92.6%
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default Education;