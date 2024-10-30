import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeroDetails } from './HeroDetails';
import { vi, beforeEach, afterEach } from 'vitest';
import { HeroData } from '../types/types';
import React from 'react';

const createMockResponse = (data: HeroData): Response => {
  return {
    json: async () => data,
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: {
      get: () => null,
    },
    redirected: false,
    type: 'basic',
    url: '',
    clone: () => createMockResponse(data),
  } as unknown as Response;
};

describe('HeroDetails', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve(
        createMockResponse({
          name: 'Test Hero',
          birth_year: '1990',
          eye_color: 'blue',
          gender: 'male',
          hair_color: 'brown',
          height: '180',
          mass: '75',
          skin_color: 'light',
          homeworld: 'Earth',
          films: ['Film 1', 'Film 2'],
          starships: ['Starship 1', 'Starship 2'],
        })
      )
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('renders HeroDetails correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/heroes/1']}>
        <Routes>
          <Route path="/heroes/:heroId" element={<HeroDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
