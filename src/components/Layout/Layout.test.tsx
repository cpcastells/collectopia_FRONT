import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Layout from "./Layout";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme/theme";

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
        <ThemeProvider theme={theme}>
          <RouterProvider router={mockRouter} />
        </ThemeProvider>
      );

      const header = screen.getByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(header).toBeInTheDocument();
    });
  });
});
