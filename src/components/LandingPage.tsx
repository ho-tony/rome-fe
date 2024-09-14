// src/components/LandingPage.tsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Typing from 'react-typing-effect';

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%;}
  50% { background-position: 100% 50%;}
  100% { background-position: 0% 50%;}
`;

// Video game themed gradient
const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 15s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Heading = styled(motion.h1)`
  font-size: 3em;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive; /* Apply video game font */
  text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
`;

const Subheading = styled(motion.p)`
  font-size: 1.2em;
  color: #ffffff;
  margin-bottom: 40px;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
`;

const StartButton = styled(motion.button)`
  padding: 15px 30px;
  font-size: 1em;
  color: #ffffff;
  background-color: #ff0066;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 0 0 5px #ff0066, 0 0 10px #ff0066;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff6699;
    transform: translateY(-5px);
  }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/questionnaire');
  };

  return (
    <LandingContainer>
      <Heading
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        This is Rome 
      </Heading>
      <Subheading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Typing
          text="Create the game for yourself and your audience."
          speed={50}
          eraseDelay={5000}
          cursorRenderer={(cursor) => <span>{cursor}</span>}
          displayTextRenderer={(text) => <span>{text}</span>}
        />
      </Subheading>
      <StartButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleGetStarted}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 5 }}
      >
        Start your game
      </StartButton>
    </LandingContainer>
  );
};

export default LandingPage;
