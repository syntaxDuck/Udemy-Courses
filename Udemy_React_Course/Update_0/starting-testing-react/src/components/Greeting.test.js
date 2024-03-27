import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("Renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Verifies 'It's good to see you!' is rendered if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Asset const
    const buttonParagraph = screen.getByText("It's good to see you!");
    expect(buttonParagraph).toBeInTheDocument();
  });

  test("Verifies 'Changed!' is rendered if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Asset const
    const buttonParagraph = screen.getByText("Changed!");
    expect(buttonParagraph).toBeInTheDocument();
  });

  test("Verifies 'It's good to see you!' is NOT rendered if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Asset const
    const buttonParagraph = screen.queryByText("It's good to see you!");
    expect(buttonParagraph).toBeNull();
  });
});
