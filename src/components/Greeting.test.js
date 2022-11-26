import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('render hello world text', () => {
    render(<Greeting />)
    
    const testElement =  screen.getByText('Hello world')
    expect(testElement).toBeInTheDocument();
})