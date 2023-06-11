import { act, render, renderHook, screen } from "@testing-library/react";
import { errorFeedback, successFeedback } from "../../modalData";
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
import { errorHandlers } from "../../../mocks/handlers/handlers";
import { server } from "../../../mocks/server/server";

describe("Given a deleteBoardgame function ", () => {
  const boardgameId = "123";
  describe("When it is called with a boardgameId", () => {
    test("Then it should dispatch the showModal action", async () => {
      const dispatch = vi.spyOn(store, "dispatch");
      const modalData = successFeedback.delete;

      const {
        result: {
          current: { deleteBoardgame },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await act(async () => {
        await deleteBoardgame(boardgameId);
      });

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

  describe("When it rejects with an error", () => {
    test("Then it should dispatch a showModal action ", async () => {
      server.resetHandlers(...errorHandlers);
      const dispatch = vi.spyOn(store, "dispatch");
      const modalData = errorFeedback.delete;

      const {
        result: {
          current: { deleteBoardgame },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await act(async () => {
        const result = await deleteBoardgame(boardgameId);

        expect(result).toBe(undefined);

        expect(dispatch).toHaveBeenCalledWith(
          showModalActionCreator(modalData)
        );
      });
    });
  });
});
