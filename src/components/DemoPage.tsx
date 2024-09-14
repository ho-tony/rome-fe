
import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Typing from 'react-typing-effect';


import character1 from '../assets/Character1.webp';
import character2 from '../assets/Character2.webp';
import character3 from '../assets/Character3.webp';



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
  justify-content: left;
  align-items: left;
  text-align: left;
`;

const Heading = styled(motion.h1)`
  font-size: 3em;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive; /* Apply video game font */
  text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
  padding: '20px;
  margin-left: 100px;
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


const characterImages = [
    character1, 
    character2,
    character3,
  ];
const characterDescriptions = [
    "The character has a simple, cute, blocky aesthetic with blonde hair, a green shirt, and brown pants. It resembles a retro 16-bit style sprite.",
    "The character features black hair, a blue jacket, and gray pants in a 16-bit retro game style.",
    "The character design featuring short red hair, a yellow hoodie, and blue jeans in a 16-bit retro game style. This character has a cheerful, playful look to fit the pixelated aesthetic."
];



const DelayedImage = ({ src, alt, delay, style }) => {
    const [showImage, setShowImage] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowImage(true);
      }, delay);
  
      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }, [delay]);
  
    return (
      <>
        {showImage ? (
          <img src={src} alt={alt} style = {style} />
        ) : (
          <p>Loading image...</p> 
        )}
      </>
    );
  };


const DemoPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false); 

  // Function to go to the previous image
  const handlePrevClick = () => {
    setHasInteracted(true); // Mark that the user has interacted
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? characterImages.length - 1 : prevIndex - 1
    );
  };

  const handleGetStarted = () => {
    navigate('/questionnaire');
  };

  const handleDemoPage = () => {
    navigate('/DemoPage');
  };


  return (
    <LandingContainer>
      <Heading
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        style={{marginLeft: '60px'}}
      >
        How our app works
      </Heading>

      <Subheading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{marginLeft: '80px'}}
      >
        Our application provides users with the ability to create personalized characters by simply providing a detailed prompt. This feature enables users to customize and design unique characters, ensuring that each creation reflects their preferences, imagination, and creativity. The process is user-friendly and intuitive, offering a seamless experience for bringing characters to life based on user input.
      </Subheading>

      
      <div style={{ textAlign: "center", marginTop: "50px" }}>

        <DemoButton onClick={handlePrevClick} >
          Generate a random character
        </DemoButton>
      </div>

      <div>
      
      {hasInteracted && (
        <div>
        <Subheading style={{marginBottom: "100px"}}>
            <Typing
                key = {currentImageIndex}
                text = {characterDescriptions[currentImageIndex]}
                      speed={20}
                      cursorRenderer={(cursor) => <span>{cursor}</span>}
                      displayTextRenderer={(text) => <span>{text}</span>}
                      eraseDelay={10000}
            > 
            </Typing>
            
        </Subheading >

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "left"}}>
          <DelayedImage
            key = {currentImageIndex}
            src={characterImages[currentImageIndex]}
            alt="Character"
            delay={3000}
            style={{ margin: 0, display: "block" ,  width: "300px", height: "400px", objectFit: "cover",}}
          />
        </div>
        </div>
      )}

    </div>



    </LandingContainer>
  );
};

export default DemoPage;