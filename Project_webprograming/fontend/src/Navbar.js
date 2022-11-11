import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { indigo , yellow } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: indigo[900]}}>
        <Box
               sx={{
                  '& > :not(style)': {
                    m: 2,
                  },
               }}
             >
              <Button href = "/main">
             <HomeIcon sx={{ color: yellow[100]}} fontSize="large" />
             </Button>
         </Box>
          <Typography variant="h5" component="div" sx={{ color: yellow[800] , flexGrow: 1 }}>
            Books Rooms System
          </Typography>
          <Button href="/profile"><AccountCircleIcon fontSize="large" sx={{ color: yellow[100]}}/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}