import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When is is rendered", () => {
    test("Then it should show a text field with a label 'username'", () => {
      const expectedLabelText = "username";

      renderWithProviders(<LoginForm />);

      const field = screen.getByLabelText(expectedLabelText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a text field with a label 'password'", () => {
      const expectedLabelText = "password";

      renderWithProviders(<LoginForm />);

      const field = screen.getByLabelText(expectedLabelText);

      expect(field).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log in'", () => {
      const expectedText = "Log in";

      renderWithProviders(<LoginForm />);

      const field = screen.getByRole("button", { name: expectedText });

      expect(field).toBeInTheDocument();
    });
  });
});
