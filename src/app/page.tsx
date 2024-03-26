"use client"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { apiBaseUrl } from './utils/env';

// Define an interface representing the shape of the objects in animalData
interface Animal {
  _id: string;
  name: string;
  imageUrl: string;
}

const AppContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 818px;
  background: #000000;
`;

const App: React.FC = () => {
  const [animalData, setAnimalData] = useState<Animal[]>([]); // Specify Animal[] as the type for animalData

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/animal`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAnimalData(data);
      } catch (error) {
        console.error('Error fetching animal data:', error);
      }
    };

    fetchData();
  }, []);

  console.log("animalData",animalData)
  console.log("animalData",animalData)


  return (
    <AppContainer>
    {animalData.map((animal) => (
    <Card key={animal._id} title={animal.name} imageUrl={animal.imageUrl} />
  ))}
    </AppContainer>
  );
};

export default App;
