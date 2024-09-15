import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Typing from 'react-typing-effect';
import YouTube from 'react-youtube';




const ImageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
  color: white;
`;



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
  justify-content: center;  /* Ensure content starts from top */
  align-items: center;
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


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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





function GeneratedAssets() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state; 
  const [images, setImages] = useState(Object);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log(formData)
        const response = await fetch('http://localhost:8000/api/get-assets/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), 
        });
  
        if (response.ok) {
          const data = await response.json();   
          console.log('Images received:', data);
  
          
          const decodedImages = Object.entries(data).map(([filename, base64Image]) => ({
            filename,
            src: `data:image/png;base64,${base64Image}`
          }));

          setImages(decodedImages); 
        } else {
          console.error('Failed to fetch images:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false); 
      }
    };
  
    fetchImages(); 
  }, [formData]);
  

  const handleAcceptAssets = () => {
    console.log('Assets accepted:', images);
    //download zip
  };

  const handleRegenerateAssets = () => {
    navigate('/questionnaire');
  };


  if (loading) {
    return (
      <LandingContainer>
        <Heading>Loading...</Heading>
      </LandingContainer>
    );
  }

  return (
    
    <LandingContainer>
      <Heading>Generated Assets</Heading>
      
      <div>
      {images && images.length > 0 ? (
        <ImageList> 
          {images.map((filename, src) => (
            <img 
              key={filename} 
              src={src} 
            />
          ))}
        </ImageList>
      ) : (
        <p>Our Generative AI was unable to generate images based on your descriptions, please try regenerating the images with a different prompt!</p>
      )}
    </div>

      <div>



      <ButtonContainer>
        
      <StartButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAcceptAssets}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
        style={{ marginRight: '40px' }}
      >
        Accept Assets
      </StartButton>

      <DemoButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleRegenerateAssets}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
      >
        Regenerate Assets
      </DemoButton>

    </ButtonContainer>

      </div>
    </LandingContainer>
  );

  }



export default GeneratedAssets;
