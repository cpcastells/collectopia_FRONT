import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Layout from "./Layout";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme/theme";
import { Provider } from "react-redux";
import { store } from "../../store";
import { renderWithProviders } from "../../utils/testUtils";
import { showStateStructureMock } from "../../mocks/ui/uiMocks";

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
});
