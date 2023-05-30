import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme/theme";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const routes = [
    {
      path: "/",
      element: ui,
    },
  ];

  const testRouter = createMemoryRouter(routes);

  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = (): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={testRouter} />
        </ThemeProvider>
      </Provider>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
