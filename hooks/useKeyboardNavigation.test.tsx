import { act, renderHook } from "@testing-library/react";
import useKeyboardNavigation from "./useKeyboardNavigation";

describe.only("useKeyboardNavigation", () => {
  const mockOnSelect = jest.fn();
  const mockPreventDefault = jest.fn();

  it("should return the -1 as highlighted index when starting", () => {
    const { result } = renderHook(() => useKeyboardNavigation(5, mockOnSelect));
    const { highlightedIndex } = result.current;

    expect(highlightedIndex).toBe(-1);
  });

  it("should return highlightedIndex=0 when press keydown", () => {
    const mockEvent = {
        key: 'ArrowDown',
        preventDefault: mockPreventDefault
    } as unknown as React.KeyboardEvent;

    const { result } = renderHook(() => useKeyboardNavigation(5, mockOnSelect));

    act(() => result.current.handleKeyDown(mockEvent));

    expect(result.current.highlightedIndex).toBe(0);
  });

  it("should return highlightedIndex=-1 when press ArrowUp after ArrowDown", () => {
    const mockArrowDownEvent = {
        key: 'ArrowDown',
        preventDefault: mockPreventDefault
    } as unknown as React.KeyboardEvent;

    const mockArrowUpEvent = {...mockArrowDownEvent, ...{ key: 'ArrowUp'}}; 

    const { result } = renderHook(() => useKeyboardNavigation(5, mockOnSelect));

    act(() => result.current.handleKeyDown(mockArrowDownEvent));
    act(() => result.current.handleKeyDown(mockArrowUpEvent));

    expect(result.current.highlightedIndex).toBe(-1);
  });

  it("should return highlightedIndex=2, when we reach max", () => {
    const mockArrowDownEvent = {
        key: 'ArrowDown',
        preventDefault: mockPreventDefault
    } as unknown as React.KeyboardEvent;

    const max = 2;
    const { result } = renderHook(() => useKeyboardNavigation(max, mockOnSelect));

    for (let index = 0; index < max + 1; index++) { // + 1 to for a few loops to make sure we always get the max
        act(() => result.current.handleKeyDown(mockArrowDownEvent));
    }

    expect(result.current.highlightedIndex).toBe(max-1); // -1 because we deal with lengths
  });
});
