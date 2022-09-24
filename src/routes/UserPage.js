import * as React from 'react';

import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

export default function MenuAppBar() {
 

  return (
    <Box sx={{ flexGrow: 1 }}>
    
    <Button  style={{
      color: "black",
      fontWeight: "bolder",
      display: "flex",
      
     paddingLeft: "825px", 
      
    }} >Logout</Button>
  <div>
  <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  </div>
    </Box>
  );
}
