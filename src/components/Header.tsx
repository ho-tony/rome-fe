import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Typing from 'react-typing-effect';




const Heading = styled(motion.h1)`
  font-size: 2em;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive; /* Apply video game font */
  text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center; /* Center the heading horizontally */
  align-items: center;     /* Center the heading vertically */
  background-color: #000000; /* Dark background to contrast with the neon text */
  padding: 20px;           /* Add some padding for visual comfort */
`;



const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <StyledToolbar>
                <Heading>
                * * * * * * * * * * * * Rome * * * * * * * * * * *
                </Heading>
            </StyledToolbar>
        </AppBar>
      );
  };
  

export default Header;