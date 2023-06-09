import { render, renderHook, screen } from "@testing-library/react";
import { store } from "../../../store";
import { errorFeedback, successFeedback } from "../../modalData";
import useBoardgames from "../useBoardgames";
import { wrapper } from "../../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import { newBoardgameMock } from "../../../mocks/boardgames/boardgamesMocks";
import { vi } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme/theme";
import { Provider } from "react-redux";
import { showModalActionCreator } from "../../../store/ui/uiSlice";
import { server } from "../../../mocks/server/server";
import { errorHandlers } from "../../../mocks/handlers/handlers";

describe("Given a addBoargame function ", () => {
  const boardgame = newBoardgameMock;

  describe("When it is called with a boardgameId", () => {
    test("Then it should dispatch the showModal action", async () => {
      const dispatch = vi.spyOn(store, "dispatch");
      const modalData = successFeedback.add;

      const {
        result: {
          current: { addBoardgame },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await addBoardgame(boardgame);

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
        name: successFeedback.add.title,
      });

      expect(dispatch).toHaveBeenCalledWith(showModalActionCreator(modalData));
      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it rejects with an error", () => {
    test("Then it should dispatch a showModal action ", async () => {
      const dispatch = vi.spyOn(store, "dispatch");
      const modalData = errorFeedback.add;

      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { addBoardgame },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      const result = await addBoardgame(boardgame);

      expect(result).toBe(undefined);
      expect(dispatch).toHaveBeenCalledWith(showModalActionCreator(modalData));
    });
  });
});
