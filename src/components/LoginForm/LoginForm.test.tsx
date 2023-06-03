import { screen } from "@testing-library/react";
import { vitest } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const submitFormMock = vitest.fn();
  const typedPassword = "holacaracola";
  const typedName = "Jonny";
  const expectedUsernameLabelText = "username";
  const expectedPasswordLabelText = "password";

  describe("When it is rendered", () => {
    test("Then it should show a text field with a label 'username'", () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const field = screen.getByLabelText(expectedUsernameLabelText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a text field with a label 'password'", () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const field = screen.getByLabelText(expectedPasswordLabelText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log in'", () => {
      const expectedText = "Log in";

      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const field = screen.getByRole("button", { name: expectedText });

      expect(field).toBeInTheDocument();
    });
  });

  describe("When the user types 'Jonny' in the username field", () => {
    test("Then it should show the typed text", async () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const userNameField = screen.getByLabelText(expectedUsernameLabelText);

      await userEvent.type(userNameField, typedName);

      expect(userNameField).toHaveValue(typedName);
    });

    test("Then the Log In button should be disabled", () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const loginButton = screen.getByRole("button", { name: /log in/i });

      expect(loginButton).toBeDisabled();
    });
  });

  describe("When the user types 'holacaracola' in the password field", () => {
    test("Then it should show the typed text", async () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const passwordField = screen.getByLabelText(expectedPasswordLabelText);

      await userEvent.type(passwordField, typedPassword);

      expect(passwordField).toHaveValue(typedPassword);
    });

    test("Then the Log in button should be disabled", () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const loginButton = screen.getByRole("button", { name: /log in/i });

      expect(loginButton).toBeDisabled();
    });
  });

  describe("When the user types both username and password", () => {
    test("Then the Log In button should be enabled", async () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const userNameField = screen.getByLabelText(expectedUsernameLabelText);
      const passwordField = screen.getByLabelText(expectedPasswordLabelText);
      const loginButton = screen.getByRole("button", { name: /log in/i });

      await userEvent.type(userNameField, typedName);
      await userEvent.type(passwordField, typedPassword);

      expect(loginButton).toBeEnabled();
    });
  });

  describe("When both fields are filled and the user clicks on the button", () => {
    test("Then the handleSubmit function should be invoked", async () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const userNameField = screen.getByLabelText(expectedUsernameLabelText);
      const passwordField = screen.getByLabelText(expectedPasswordLabelText);
      const loginButton = screen.getByRole("button", { name: /log in/i });

      await userEvent.type(userNameField, typedName);
      await userEvent.type(passwordField, typedPassword);

      await userEvent.click(loginButton);

      expect(submitFormMock).toHaveBeenCalled();
    });
  });
});
