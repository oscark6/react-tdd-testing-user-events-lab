import { render, screen, fireEvent  } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);
  const nameInput = screen.getByLabelText("Name:");
  const emailInput = screen.getByLabelText("Email:");
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  const designCheckbox = screen.getByLabelText("Design");
  const developmentCheckbox = screen.getByLabelText("Development");
  const writingCheckbox = screen.getByLabelText("Writing");
  expect(designCheckbox).toBeInTheDocument();
  expect(developmentCheckbox).toBeInTheDocument();
  expect(writingCheckbox).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);
  const designCheckbox = screen.getByLabelText("Design");
  const developmentCheckbox = screen.getByLabelText("Development");
  const writingCheckbox = screen.getByLabelText("Writing");
  expect(designCheckbox).not.toBeChecked();
  expect(developmentCheckbox).not.toBeChecked();
  expect(writingCheckbox).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);
  const nameInput = screen.getByLabelText("Name:");
  const emailInput = screen.getByLabelText("Email:");
  fireEvent.change(nameInput, { target: { value: "daniel beyene" } });
  fireEvent.change(emailInput, { target: { value: "danielo@example.com" } });
  expect(nameInput.value).toBe("daniel beyene");
  expect(emailInput.value).toBe("danielo@example.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);
  const designCheckbox = screen.getByLabelText("Design");
  fireEvent.click(designCheckbox);
  expect(designCheckbox).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);
  const nameInput = screen.getByLabelText("Name:");
  const emailInput = screen.getByLabelText("Email:");
  const designCheckbox = screen.getByLabelText("Design");
  const submitButton = screen.getByText("Submit");
  fireEvent.change(nameInput, { target: { value: "daniel beyene" } });
  fireEvent.change(emailInput, { target: { value: "danielo@example.com" } });
  fireEvent.click(designCheckbox);
  fireEvent.click(submitButton);
  const successMessage = screen.getByText(/thank you for signing up/i);
  expect(successMessage).toBeInTheDocument();
});