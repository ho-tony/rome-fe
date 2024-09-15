import React, { useState } from 'react';
import styled from 'styled-components';

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


  mainCharacterType: string;
  mainEnemyType: string;


  characters: string;
  difficulty: string;
  [key: string]: string;
}

const Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    brandName: '',
    purpose: '',
    audience: '',
  
    genre: '',
    mainCharacterType: '',
    mainEnemyType: '',
    setting: '',
    characters: '',
    difficulty: '',
  });

  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Send data to backend
    fetch('https://your-backend-api.com/generate-game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Game generated:', data);
        // Redirect or display the result as needed
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while generating your game.');
      });
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
          placeholder='Ex. Mr.Beast'
          value={formData.brandName}
          onChange={handleChange}
          required
        />


        <Label htmlFor="purpose">What's the purpose of the game? </Label>
        <Input
          type="text"
          id="purpose"
          name="purpose"
          placeholder='Ex. Establish my brand'
          value={formData.purpose}
          onChange={handleChange}
          required
        />


        <Label htmlFor="audience">What's your intended audience for the game? </Label>
        <Input
          type="text"
          id="audience"
          name="audience"
          placeholder='Ex. Children'
          value={formData.audience}
          onChange={handleChange}
          required
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
          required
        >
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="expert">Expert</option>
        </Select>


        <Label htmlFor="genre">What Genre do you want your game to be?</Label>
        <Select
          id="genre"
          name="sgenre"
          value={formData.genre}
          onChange={handleChange}
          required
        >
          <option value="">Select difficulty</option>
          <option value="easy">Fantasy</option>
          <option value="medium">Medieval</option>
          <option value="hard">Sci-Fi</option>
          <option value="expert">Post-Apocalyptic</option>
          <option value="expert">Cyberpunk</option>
        </Select>


         
      </FormGroup>


    </div>,

    <div key="step3">
      <Title>Step 3: Main Characters</Title>
      <FormGroup>
        <Label htmlFor="characters">Who are the main characters?</Label>
        <Input
          type="text"
          id="characters"
          name="characters"
          value={formData.characters}
          onChange={handleChange}
          required
        />
      </FormGroup>
    </div>,

    <div key="step4">
      <Title>Step 4: Game Difficulty</Title>
      <FormGroup>
        <Label htmlFor="difficulty">Choose a difficulty level</Label>
        <Input
          type="text"
          id="difficulty"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          required
        />
      </FormGroup>
    </div>,
  ];

  return (
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
  );
};

export default Questionnaire;
