import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundVid from '../assets/background2.mp4';





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

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #555;
  margin-bottom: 8px;
  margin-top:10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const NavigationButton = styled.button`
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
  margin: 10px;

  &:hover {
    background-color: #ff6699;
    transform: translateY(-5px);
  }
`;

interface FormData {
  brandName: string;
  purpose: string;
  audience: string;


  genre: string;
  setting: string;


  characters: string;
  enemies: string;
  weapons: string;
  [key: string]: string;
}

const Questionnaire: React.FC = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    brandName: '',
    purpose: '',
    audience: '',
  
    genre: '',
    setting: '',

    weapons: '',
    enemies: '',
    characters: '',
  });

  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate('/loading', {state:{formData}});
  };


  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Step components
  const steps = [
    <div key="step1">
      <Title>Step 1: General Information</Title>
      <FormGroup>
        <Label htmlFor="genre">What's your brand name?</Label>
        <Input
          type="text"
          id="brandName"
          name="brandName"
          placeholder='ex. Mr.Beast'
          value={formData.brandName}
          onChange={handleChange}
        />


        <Label htmlFor="purpose">What's the purpose of the game? </Label>
        <Input
          type="text"
          id="purpose"
          name="purpose"
          placeholder='ex. Establish my brand'
          value={formData.purpose}
          onChange={handleChange}
        />


        <Label htmlFor="audience">What's your intended audience for the game? </Label>
        <Input
          type="text"
          id="audience"
          name="audience"
          value={formData.audience}
          onChange={handleChange}
          placeholder='ex.Children' 
        />


      </FormGroup>
    </div>,

    <div key="step2">
      <Title>Step 2: Game Settings</Title>
      <FormGroup>


        <Label htmlFor="setting">How challenging do you want the game to be?</Label>
        <Select
          id="setting"
          name="setting"
          value={formData.setting}
          onChange={handleChange}
        >
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="expert">Expert</option>
        </Select>



        <Label htmlFor="genre">What Genre do you want your game to be?</Label>
        <Input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />


      </FormGroup>


    </div>,

    <div key="step3">

      <Title>Step 3: Characters</Title>
      <FormGroup>

        <Label htmlFor="characters">Describle How do you want your main Character to look like</Label>
        <Input
          type="text"
          id="characters"
          name="characters"
          value={formData.characters}
          onChange={handleChange}
          required
        />

        
        <Label htmlFor="enemies">Describle How do you want your Monsters to look like</Label>
        <Input
          type="text"
          id="enemies"
          name="enemies"
          value={formData.enemies}
          onChange={handleChange}
          required
        />

        <Label htmlFor="weapons">Describle How do you want your Weapons to look like</Label>
        <Input
          type="text"
          id="weapons"
          name="weapons"
          value={formData.weapons}
          onChange={handleChange}
          required
        />
      </FormGroup>

    </div>,


  ];

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

      <Container>

        
      <form onSubmit={handleSubmit}>
        {steps[currentPage]}

        <div style={{ textAlign: 'center' }}>
          {currentPage > 0 && (
            <NavigationButton type="button" onClick={prevPage}>
              Previous
            </NavigationButton>
          )}

          {currentPage < steps.length - 1 ? (
            <NavigationButton type="button" onClick={nextPage}>
              Next
            </NavigationButton>
          ) : (
            <NavigationButton type="submit">
              Submit
            </NavigationButton>
          )}
        </div>
      </form>
    </Container>
  

    </VideoBackgroundContainer>
  );
    
};

export default Questionnaire;
