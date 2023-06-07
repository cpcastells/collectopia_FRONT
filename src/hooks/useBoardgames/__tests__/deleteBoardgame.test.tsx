import { render, renderHook, screen } from "@testing-library/react";
import { successFeedback } from "../../modalData";
import useBoardgames from "../useBoardgames";
import { wrapper } from "../../../utils/testUtils";
import { vi } from "vitest";
import { store } from "../../../store";
import { showModalActionCreator } from "../../../store/ui/uiSlice";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme/theme";

describe("Given a deleteBoardgame function ", () => {
  describe("When it is called with a boardgameId", () => {
    test("Then it should dispatch the showModal action", async () => {
      const boardgameId = "123";
      const dispatch = vi.spyOn(store, "dispatch");
      const modalData = successFeedback.delete;

      const {
        result: {
          current: { deleteBoardgame },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await deleteBoardgame(boardgameId);

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      );

      const heading = screen.getByRole("heading", {
        name: successFeedback.delete.title,
      });

      expect(dispatch).toHaveBeenCalledWith(showModalActionCreator(modalData));
      expect(heading).toBeInTheDocument();
    });
  });
});
