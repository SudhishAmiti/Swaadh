// Contact.test.js
import { render, screen } from "@testing-library/react";
import Contact from '../Contact';

test('should render the contact component', () => {
  console.log("Rendering Contact component in test");
  render(<Contact />);

  const heading = screen.getByRole('heading', { name: 'Contact Us' });

  console.log("Heading found:", heading);
  expect(heading).toBeInTheDocument();
});
