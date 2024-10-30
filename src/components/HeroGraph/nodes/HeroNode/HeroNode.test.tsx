import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroNode } from './HeroNode';

// Test suite for the HeroNode component
describe('HeroNode', () => {
  // Test to check if the hero information is rendered
  it('renders the hero information correctly', () => {
    const mockHeroData = {
      heroImage: 'https://example.com/hero-image.jpg',
      heroName: 'Luke Skywalker',
      birth_year: '19BBY',
      eye_color: 'Blue',
      gender: 'Male',
      hair_color: 'Blonde',
      height: '172',
      mass: '77',
      skin_color: 'Fair',
      homeworld: 'Tatooine',
    };

    render(
      <HeroNode
        heroImage={mockHeroData.heroImage}
        heroName={mockHeroData.heroName}
        birth_year={mockHeroData.birth_year}
        eye_color={mockHeroData.eye_color}
        gender={mockHeroData.gender}
        hair_color={mockHeroData.hair_color}
        height={mockHeroData.height}
        mass={mockHeroData.mass}
        skin_color={mockHeroData.skin_color}
        homeworld={mockHeroData.homeworld}
      />
    );

    // Check if the hero name is rendered
    expect(screen.getByText(`Name: ${mockHeroData.heroName}`)).toBeInTheDocument();
    // Check if the birth year is rendered
    expect(screen.getByText(`Birth Year: ${mockHeroData.birth_year}`)).toBeInTheDocument();
    // Check if the eye color is rendered
    expect(screen.getByText(`Eye Color: ${mockHeroData.eye_color}`)).toBeInTheDocument();
    // Check if the gender is rendered
    expect(screen.getByText(`Gender: ${mockHeroData.gender}`)).toBeInTheDocument();
    // Check if the hair color is rendered
    expect(screen.getByText(`Hair Color: ${mockHeroData.hair_color}`)).toBeInTheDocument();
    // Check if the height is rendered
    expect(screen.getByText(`Height: ${mockHeroData.height}`)).toBeInTheDocument();
    // Check if the mass is rendered
    expect(screen.getByText(`Mass: ${mockHeroData.mass}`)).toBeInTheDocument();
    // Check if the skin color is rendered
    expect(screen.getByText(`Skin Color: ${mockHeroData.skin_color}`)).toBeInTheDocument();
    // Check if the homeworld is rendered
    expect(screen.getByText(`Homeworld: ${mockHeroData.homeworld}`)).toBeInTheDocument();
    
    // Check if the hero image is rendered
    expect(screen.getByAltText(mockHeroData.heroName)).toHaveAttribute('src', mockHeroData.heroImage);
  });
});
