import { RouterProvider } from "react-router-dom";
import { renderWithProvidersWithoutRouter } from "../../utils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

describe("Given a appRouter", () => {
  describe("When there is a loading state ", () => {
    test("Then it should appear a loading", () => {
      const ariaText = "loading spinner";

      renderWithProvidersWithoutRouter(<RouterProvider router={appRouter} />, {
        uiStore: {
          filter: "",
          isLoading: true,
          modalData: { isError: false, isSuccess: false },
        },
      });

      const loader = screen.getByLabelText(ariaText);

      expect(loader).toBeInTheDocument();
    });
  });
});
