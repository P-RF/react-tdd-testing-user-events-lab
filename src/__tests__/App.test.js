import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  expect(image).toHaveAttribute("src", "/images/IMG-20230326-WA0016(1).jpg");
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
  // your test code here
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />);

  const softwareCheckbox = screen.getByRole("checkbox", { name: /software/i });
  const travelingCheckbox = screen.getByRole("checkbox", { name: /traveling/i });
  const dogsCheckbox = screen.getByRole("checkbox", { name: /dogs/i });

  expect(softwareCheckbox).toBeInTheDocument();
  expect(travelingCheckbox).toBeInTheDocument();
  expect(dogsCheckbox).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />);

  const softwareCheckbox = screen.getByRole("checkbox", { name: /software/i });
  const travelingCheckbox = screen.getByRole("checkbox", { name: /traveling/i });
  const dogsCheckbox = screen.getByRole("checkbox", { name: /dogs/i });

  expect(softwareCheckbox).not.toBeChecked();
  expect(travelingCheckbox).not.toBeChecked();
  expect(dogsCheckbox).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  userEvent.type(nameInput, "Priscila");
  userEvent.type(emailInput, "priscila@email.com")

  expect(nameInput).toHaveValue("Priscila");
  expect(emailInput).toHaveValue("priscila@email.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App />);

  const softwareCheckbox = screen.getByRole("checkbox", { name: /software/i });
  const travelingCheckbox = screen.getByRole("checkbox", { name: /traveling/i });
  const dogsCheckbox = screen.getByRole("checkbox", { name: /dogs/i });

  // check initial state
  expect(softwareCheckbox).not.toBeChecked();
  expect(travelingCheckbox).not.toBeChecked();
  expect(dogsCheckbox).not.toBeChecked();

  // simulate user clicks
  userEvent.click(softwareCheckbox);
  userEvent.click(travelingCheckbox);
  userEvent.click(dogsCheckbox);

  // verify updated state
  expect(softwareCheckbox).toBeChecked();
  expect(travelingCheckbox).toBeChecked();
  expect(dogsCheckbox).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App/>);

  // find and click the submit button
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();

  userEvent.click(submitButton);

  // expect message to appear
  const submitMessage = screen.getByText(/Thanks for signing up!/i);
  expect(submitMessage).toBeInTheDocument();
});
