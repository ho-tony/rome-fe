import React, {useState, useEffect, useRef} from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Typing from 'react-typing-effect';
import YouTube from 'react-youtube';



import img1 from '../assets/p1.png';
import img2 from '../assets/p2.png';
import img3 from '../assets/p3.png';
import img4 from '../assets/p4.png';
import img5 from '../assets/p5.png';
import img6 from '../assets/p6.png';
import img7 from '../assets/p7.png';
import img8 from '../assets/p8.png';



const handleDownload = () => {
    const fileName = 'dist-4.zip'; 
    const filePath = `../assets/dist-4.zip`; 

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;

    // Append to the document, click, and remove
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
  };


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


const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Responsive grid
  gap: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCheckbox = styled.input`
  margin-top: 10px;
`;




function GeneratedAssets() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state; 
  const [images, setImages] = useState(Object);
  const [loading, setLoading] = useState(true);


  const [selectedImages, setSelectedImages] = useState([]); // Track selected images

  // Placeholder image URLs (replace with your actual image data)
  const imageUrls = [
    img1,
    img2,
    img3,
    img4,  
  ];


  const imageUrls2 = [
    img5,
    img6,
    img7,
    img8,  
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

  const handleCheckboxChange = (index) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         console.log(formData)
//         const response = await fetch('http://localhost:8000/api/get-assets/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData), 
//         });
  
//         if (response.ok) {
//           const data = await response.json();   
//           console.log('Images received:', data);
  
          
//           const decodedImages = Object.entries(data).map(([filename, base64Image]) => ({
//             filename,
//             src: `data:image/png;base64,${base64Image}`
//           }));

//           setImages(decodedImages); 
//         } else {
//           console.error('Failed to fetch images:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       } finally {
//         setLoading(false); 
//       }
//     };
  
//     fetchImages(); 
//   }, [formData]);
  

  const handleAcceptAssets = () => {
    console.log('Assets accepted:', images);
    //download zip
  };

  const handleRegenerateAssets = () => {
    navigate('/questionnaire');
  };



const DownloadZip = () => {
  return (
      <a
        href="../assets/dist.zip"
        download="rome.zip"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
  );
};



//   if (loading) {
//     return (
//       <LandingContainer>
//         <Heading>Loading...</Heading>
//       </LandingContainer>
//     );
//   }



  return (
    
    <LandingContainer>
      <Heading>Generated Assets</Heading>

      <Subheading3> Mob Design Assets</Subheading3>

      <ImageGrid>
        {imageUrls.map((url, index) => (
          <ImageContainer key={index}>
            <DelayedImage delay = {Math.random() * 10000 + 2000} src={url} alt={`Generated Asset ${index + 1}`} style={{height: '400px', width: '400px'}}/>
            <ImageCheckbox style={{height: '50px', width: '50px'}}
              type="checkbox"
            />
          </ImageContainer>
        ))}
      </ImageGrid>

      <Subheading3> Boss Design Assets</Subheading3>

      <ImageGrid>
        {imageUrls2.map((url, index) => (
          <ImageContainer key={index}>
            <DelayedImage delay = {Math.random() * 10000 + 2000} src={url} alt={`Generated Asset ${index + 1}`} style={{height: '400px', width: '400px'}}/>
            <ImageCheckbox
              style={{height: '50px', width: '50px'}}
              type="checkbox"
            />
          </ImageContainer>
        ))}
      </ImageGrid>
    

      <div>



      <ButtonContainer>
        
      <StartButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDownload}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
        style={{ marginBottom: '30px', marginTop: '20px', marginRight: '20px' }}
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
        style={{ marginBottom: '40px', marginTop: '20px' , marginLeft: '20px'   }}
      >
        Regenerate Assets
      </DemoButton>

    </ButtonContainer>

      </div>
    </LandingContainer>
  );

  }



export default GeneratedAssets;
