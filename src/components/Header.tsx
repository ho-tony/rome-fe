import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Styled heading with hover effect
const Heading = styled(motion.button)`
  background-color: transparent;
  border: transparent;
  font-size: 2em;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive; /* Apply video game font */
  text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;

  transition: color 0.3s ease, text-shadow 0.3s ease;
  &:hover {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
  }
`;

// Styled toolbar
const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center; /* Center the heading horizontally */
  align-items: center;     /* Center the heading vertically */
  background-color: #000022; /* Dark background to contrast with the neon text */
  padding: 20px;           /* Add some padding for visual comfort */
`;

// Header component
const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleHomePage = () => {
        navigate('/');
      };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Heading
        onClick={handleHomePage}>
          * * * * * * * * * * * * Rome * * * * * * * * * * *
        </Heading>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
