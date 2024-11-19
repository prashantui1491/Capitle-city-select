import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better assertions
import SimpleButton from './index';

describe('SimpleButton Component', () => {
  test('renders the button with the correct label', () => {
    render(<SimpleButton label="buttonLable" />);
    
    // Assert that the button is in the document with the correct label
    const buttonElement = screen.getByText('buttonLable');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick function when clicked', () => {
    const handleClick = jest.fn(); // Mock function
    render(<SimpleButton onClick={handleClick} label="Submitbutton" />);
    
    const buttonElement = screen.getByText('Submitbutton');
    
    // Simulate click event
    fireEvent.click(buttonElement);
    
    // Assert that the mock function was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("Simple Button component test", ()=>{
  test("render text test", ()=>{
    render(<SimpleButton label="buttonlabel"/>)

    const buttonElement = screen.getByText("buttonlabel")
    expect(buttonElement).toBeInTheDocument()
  })

  test("buttonCliclTest", ()=>{

    const handleClick = jest.fn()
    render(<SimpleButton onClick={handleClick} label="Submitbutton"/>)

    const buttonElement = screen.getByText("Submitbutton")
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1);
  })
})