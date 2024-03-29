import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Layout from "./Layout";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme/theme";
import { Provider } from "react-redux";
import { store } from "../../store";
import { renderWithProviders } from "../../utils/testUtils";
import { showStateStructureMock } from "../../mocks/ui/uiMocks";
import { createStateStructureMock } from "../../mocks/factories/ui/uiStateFactory";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'COLLECTOPIA'", () => {
      const expectedText = "COLLECTOPIA";

      const routes = [
        {
          path: "/",
          element: <Layout />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={mockRouter} />
          </ThemeProvider>
        </Provider>
      );

      const header = screen.getByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(header).toBeInTheDocument();
    });
  });

  describe("When a page is loading", () => {
    test("Then it should renders the loader", () => {
      const expectedLabelText = "loading spinner";

      renderWithProviders(<Layout />, { uiStore: showStateStructureMock });

      const loader = screen.getByLabelText(expectedLabelText);

      expect(loader).toBeInTheDocument();
    });
  });

  describe("When it receives isSuccess from the state", () => {
    test("Then it should renders the feedback component", () => {
      const expectedButtonAltText = "exit button";
      const mockState = createStateStructureMock({
        modalData: {
          isError: false,
          isSuccess: true,
        },
      });

      renderWithProviders(<Layout />, { uiStore: mockState });

      const feedback = screen.getByAltText(expectedButtonAltText);

      expect(feedback).toBeInTheDocument();
    });
  });

  describe("When it receives isError from the state", () => {
    test("Then it should renders the feedback component", () => {
      const expectedButtonAltText = "exit button";
      const mockState = createStateStructureMock({
        modalData: {
          isError: true,
          isSuccess: false,
        },
      });

      renderWithProviders(<Layout />, { uiStore: mockState });

      const feedback = screen.getByAltText(expectedButtonAltText);

      expect(feedback).toBeInTheDocument();
    });
  });
});
