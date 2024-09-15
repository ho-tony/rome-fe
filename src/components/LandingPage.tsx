

import React, {useRef, useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Typing from 'react-typing-effect';
import backgroundVid from '../assets/background.mp4';
import logoVideo from '../assets/logo.mp4'; 




const VideoBackgroundContainer = styled.div`

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

// Styled video component to ensure it covers the entire container
const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  object-fit: cover; /* Ensures the video covers the container without distortion */
  z-index: -1; /* Keeps the video behind other content */
  autoplay: true;
`;

// Content to display on top of the video
const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  font-size: 1rem;
`;




const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it behind other content */
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

    
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const AssetList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
  color: white;
`;


const DemoButton = styled(motion.button)`
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

  const handleDemoPage = () => {
    navigate('/demopage');
  };
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Handle when the video is ready to play
  const handleCanPlay = () => {
    setIsReady(true);
    videoRef.current?.play(); // Play the video once it's fully loaded
  };

  return (

    <VideoBackgroundContainer>
      <StyledVideo
      ref={videoRef}
      muted
      loop
      playsInline
      onCanPlay={handleCanPlay}
      style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} // Fade in the video
    >
        <source src={backgroundVid}  type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>

      <Content>
      
      
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
          text="Create the game for you and your brand!"
          speed={50}
          eraseDelay={5000}
          cursorRenderer={(cursor) => <span>{cursor}</span>}
          displayTextRenderer={(text) => <span>{text}</span>}
        />
      </Subheading>
      

      <ButtonContainer>
      <StartButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDemoPage}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 5 }}
        style={{ marginBottom: '20px' }}
      >
        How does our game Work
      </StartButton>

      <DemoButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleGetStarted}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 6 }}
      >
        Create your game
      </DemoButton>
    </ButtonContainer>

      </Content>

    </VideoBackgroundContainer>
  );
};

export default LandingPage;