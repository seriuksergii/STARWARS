import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilmNode } from './FilmNode';

// Test suite for the FilmNode component
describe('FilmNode', () => {
  // Test to check if the film name is rendered
  it('renders the film name', () => {
    render(<FilmNode filmName="The Empire Strikes Back" />);
    expect(
      screen.getByText('Related Film: The Empire Strikes Back')
    ).toBeInTheDocument();
  });

  // Test to check rendering the component with an empty filmName value
  it('renders with empty film name', () => {
    render(<FilmNode filmName="" />);
    expect(screen.getByText('Related Film:')).toBeInTheDocument();
  });

  // Test to check the correctness of the component's CSS class
  it('has the correct class name', () => {
    render(<FilmNode filmName="The Empire Strikes Back" />);
    const filmNodeElement = screen.getByText(
      'Related Film: The Empire Strikes Back'
    );
    // Check that the parent element has the 'film-node' class
    expect(filmNodeElement.parentElement).toHaveClass('film-node');
  });

  // Test to check rendering different film names
  it('renders different film names', () => {
    const filmNames = [
      'A New Hope',
      'Return of the Jedi',
      'The Phantom Menace',
    ];

    // Iterate over the array of film names and check their rendering
    filmNames.forEach((filmName) => {
      render(<FilmNode filmName={filmName} />);
      // Check that each film name is rendered correctly
      expect(screen.getByText(`Related Film: ${filmName}`)).toBeInTheDocument();
    });
  });
});
