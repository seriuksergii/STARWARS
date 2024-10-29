import React from 'react';
import { HeroList } from '../components/HeroList';

//I declare the functional component Homepage with typing TypeScript (React.FC).
export const Homepage: React.FC = () => {
  return (
    <div>
      <HeroList
        name={''}
        url={''}
        homeworld={''}
        birth_year={''}
        eye_color={''}
        gender={''}
        hair_color={''}
        height={''}
        mass={''}
        skin_color={''}
        films={[]}
        species={[]}
        starships={[]}
        vehicles={[]}
        close={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};
