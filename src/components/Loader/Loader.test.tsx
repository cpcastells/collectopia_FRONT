import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loading animation", () => {
      const expectedLabelText = "loading spinner";

      renderWithProviders(<Loader />);

      const loader = screen.getByLabelText(expectedLabelText);

      expect(loader).toBeInTheDocument();
    });
  });
});
