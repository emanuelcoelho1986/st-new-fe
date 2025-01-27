import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DropdownOptions, {
  INPUT_FILTER_TESTID,
  LIST_ITEM_PARTIAL_TESTID,
  LIST_NAME_TESTID,
  Option,
} from "./DropdownOptions";

const mockOptipons: Option[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
];

describe("DropdownOptions", () => {
  const mockDidSelectOption = jest.fn();

  it("renders with default", () => {
    render(
      <DropdownOptions
        options={mockOptipons}
        didSelectOption={mockDidSelectOption}
      />
    );

    const optionsElement = screen.getByTestId(LIST_NAME_TESTID);
    const filterByElement = screen.getByTestId(INPUT_FILTER_TESTID);

    expect(optionsElement).toBeInTheDocument();
    expect(filterByElement).toBeInTheDocument();

    const numberOfLiElements = optionsElement.querySelectorAll("li");

    expect(numberOfLiElements.length).toBe(mockOptipons.length);
  });

  it("renders with without filter", () => {
    render(
      <DropdownOptions
        options={mockOptipons}
        didSelectOption={mockDidSelectOption}
        isSearchable={false}
      />
    );

    const optionsElement = screen.getByTestId(LIST_NAME_TESTID);
    const filterByElement = screen.queryByTestId(INPUT_FILTER_TESTID);

    expect(optionsElement).toBeInTheDocument();
    expect(filterByElement).not.toBeInTheDocument();
  });

  it("select and option should trigger didSelecOption", () => {
    render(
      <DropdownOptions
        options={mockOptipons}
        didSelectOption={mockDidSelectOption}
      />
    );

    const firstOption = mockOptipons[0];
    const firstValue = firstOption.value;
    const listElement = screen.getByTestId(
      LIST_ITEM_PARTIAL_TESTID(firstValue!)
    );

    expect(listElement).toBeInTheDocument();

    fireEvent.click(listElement);

    expect(mockDidSelectOption).toHaveBeenLastCalledWith(firstOption);
  });
});
