import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { GlobalStyle } from "./styles/GlobalStyle/GlobalStyle";
import "@fontsource/jost";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/700.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/nunito";
import "@fontsource/luckiest-guy";
import { RouterProvider } from "react-router";
import appRouter from "./routers/appRouter/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
