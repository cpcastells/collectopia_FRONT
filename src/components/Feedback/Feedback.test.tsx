import { screen } from "@testing-library/react";
import { createStateStructureMock } from "../../mocks/factories/ui/uiStateFactory";
import { renderWithProviders } from "../../utils/testUtils";
import Feedback from "./Feedback";

const testCases = [
  { icon: "delete success", expectedText: "success delete" },
  { icon: "delete failed", expectedText: "failed delete" },
  { icon: "edit success", expectedText: "success edit" },
  { icon: "edit failed", expectedText: "failed edit" },
  { icon: "add success", expectedText: "success add" },
  { icon: "add failed", expectedText: "failed add" },
  { icon: "credentials success", expectedText: "success credentials" },
  { icon: "credentials failed", expectedText: "failed credentials" },
];

describe("Given a Feedback component", () => {
  testCases.forEach(({ icon, expectedText }) => {
    describe(`When it receives '${icon}' as an icon from the state`, () => {
      test(`Then it should render an icon with the aria text '${expectedText}'`, () => {
        const mockState = createStateStructureMock({
          modalData: {
            isError: false,
            isSuccess: false,
            icon: icon,
          },
        });

        renderWithProviders(<Feedback />, { uiStore: mockState });

        const image = screen.getByLabelText(expectedText);

        expect(image).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered and it receives isError from the state", () => {
    test("Then it should show a button with an icon ", () => {
      const expectedButtonAltText = "exit button";
      const mockState = createStateStructureMock({
        modalData: {
          isError: true,
          isSuccess: false,
        },
      });

      renderWithProviders(<Feedback />, { uiStore: mockState });

      const image = screen.getByAltText(expectedButtonAltText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is rendered and it receives isSuccess from the state", () => {
    test("Then it should show a button with an icon ", () => {
      const expectedButtonAltText = "exit button";
      const mockState = createStateStructureMock({
        modalData: {
          isError: false,
          isSuccess: true,
        },
      });

      renderWithProviders(<Feedback />, { uiStore: mockState });

      const image = screen.getByAltText(expectedButtonAltText);

      expect(image).toBeInTheDocument();
    });
  });
});
