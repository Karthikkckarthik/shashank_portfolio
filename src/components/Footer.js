import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Shashanka G. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;