// src/components/Questionnaire.tsx

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
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const SubmitButton = styled.button`
  width: 100%;
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



interface FormData {
  genre: string;
  setting: string;
  characters: string;
}

const Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    genre: '',
    setting: '',
    characters: '',
  });

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

  return (
    <Container>
      <Title>Tell Us About You</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="genre">What's your brand?</Label>
          <Input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="setting">How challenging do you want the game to be?</Label>
          <Input
            type="text"
            id="setting"
            name="setting"
            value={formData.setting}
            onChange={handleChange}
            required
          />
        </FormGroup>

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

        {/* Additional questions can be added here */}

        <SubmitButton type="submit">Generate My Game</SubmitButton>
      </form>
    </Container>
  );
};

export default Questionnaire;
