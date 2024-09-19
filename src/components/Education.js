import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

function Education() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="B.E in Computer Science and Engineering"
              secondary="BMSCE - 9.24 GPA"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="XII PCMC"
              secondary="RVK-BSK - 92.6%"
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default Education;