
import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Typing from 'react-typing-effect';
import YouTube from 'react-youtube';



import character1 from '../assets/Character1.webp';
import character2 from '../assets/Character2.webp';
import character3 from '../assets/Character3.webp';



const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%;}
  50% { background-position: 100% 50%;}
  100% { background-position: 0% 50%;}
`;




const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;  /* Ensures it covers at least the full viewport height */
  background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 15s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: flex-left;  /* Ensure content starts from top */
  align-items: flex-left;
  position: relative;  /* Allows it to grow as content increases */
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

const Subheading2 = styled(motion.p)`
    font-size: 2em;
    color: #ffffff;
    margin-bottom: 40px;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
    margin-left: 80px; /* Add these here */
    margin-right: 80px;
`;



const Subheading3 = styled(motion.p)`
    font-size: 1.5em;
    color: #ffffff;
    margin-bottom: 40px;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
    margin-left: 80px; /* Add these here */
    margin-right: 80px;
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
  margin-bottom: 50px;

  &:hover {
    background-color: #ff6699;
    transform: translateY(-5px);
  }
`;



const YouTubePlayer = () => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,  // Will autoplay the video
      },
    };
  
    return <YouTube videoId="dQw4w9WgXcQ" opts={opts} />;
  };


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
          <Subheading2>Loading image...</Subheading2> 
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


  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,  // Will autoplay the video
    },
  };


  return (
    <LandingContainer>

    <Heading
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        style={{marginLeft: '60px'}}
      >
        Purpose of our App
      </Heading>

      <Subheading3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Our platform empowers content creators, companies, and influencers to elevate their brand presence by seamlessly integrating customized games that reflect their unique brand identity. Whether you're looking to engage your audience through interactive experiences or strengthen your brand’s recognition, our app leverages advanced AI technology to generate games that are tailored specifically to your brand's values, themes, and aesthetic. By offering personalized gaming experiences, we help creators and businesses build deeper connections with their audience, boosting engagement and enhancing brand loyalty.
      </Subheading3>

      



      <Heading
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        style={{marginLeft: '60px'}}
      >
        Generative AI GamePlay
      </Heading>

        <div style={{        display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                            backgroundColor: 'black',
                            border: '5px solid',
                            borderImageSource: 'linear-gradient(45deg, #a445b2, #fa4299)',
                            borderImageSlice: 1,
                            boxShadow: '0 0 15px #fa4299, 0 0 30px #a445b2, 0 0 45px #fa4299, 0 0 60px #a445b2',
                            width: 'fit-content',
                            margin: '20px auto',
                            borderRadius: '10px',
                }}>
        <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
        </div>



      <Heading
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        style={{marginLeft: '60px'}}
      >
        How our application works
      </Heading>

      





      
      <div style={{ textAlign: "center", marginTop: "50px" }}>

        <DemoButton onClick={handlePrevClick} >
          Generate a random character
        </DemoButton>
      </div>

      <div>
      
      {hasInteracted && (
        <div>
        <Subheading3>
            <Typing
                key = {currentImageIndex}
                text = {characterDescriptions[currentImageIndex]}
                      speed={20}
                      cursorRenderer={(cursor) => <span>{cursor}</span>}
                      displayTextRenderer={(text) => <span>{text}</span>}
                      eraseDelay={10000}
            > 
            </Typing>
            
        </Subheading3 >

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "left"}}>
          <DelayedImage
            key = {currentImageIndex}
            src={characterImages[currentImageIndex]}
            alt="Character"
            delay={3000}
            style={{ marginBottom: '20px', display: "block" ,  width: "300px", height: "400px", objectFit: "cover",}}
          />
        </div>
        </div>
      )}


    </div>
    
    <Subheading2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        
      </Subheading2>

      <Subheading3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Our application provides users with the ability to create personalized characters by simply providing a detailed prompt. This feature enables users to customize and design unique characters, ensuring that each creation reflects their preferences, imagination, and creativity. The process is user-friendly and intuitive, offering a seamless experience for bringing characters to life based on user input.
      </Subheading3>



    </LandingContainer>
  );
};

export default DemoPage;