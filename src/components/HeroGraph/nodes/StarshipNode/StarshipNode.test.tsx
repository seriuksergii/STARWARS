import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StarshipNode } from './StarshipNode';

// Test suite for the StarshipNode component
describe('StarshipNode', () => {
  // Test to check if the starship name is rendered
  it('renders the starship name', () => {
    render(<StarshipNode name="Millennium Falcon" />);
    expect(
      screen.getByText('Related Starship: Millennium Falcon')
    ).toBeInTheDocument();
  });

  // Test to check if the component has the correct CSS class
  it('has the correct class name', () => {
    render(<StarshipNode name="X-Wing" />);
    const starshipNodeElement = screen.getByText('Related Starship: X-Wing');
    expect(starshipNodeElement.parentElement).toHaveClass('starship-node');
  });

  // Test to check rendering of different starship names
  it('renders different starship names', () => {
    const starshipNames = ['TIE Fighter', 'Star Destroyer', 'Slave I'];

    // Iterate over the array of starship names and check their rendering
    starshipNames.forEach((name) => {
      render(<StarshipNode name={name} />);
      expect(screen.getByText(`Related Starship: ${name}`)).toBeInTheDocument();
    });
  });
});
