import { useState } from "react";

const useKeyboardNavigation = (
  maxIndex: number,
  onSelect: (atIndex: number) => void
) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const canHighlightPrevious = (nextHighlighted: number) => {
    return nextHighlighted > -1;
  };

  const canHightlightNext = (nextHighlighted: number) => {
    return nextHighlighted <= maxIndex;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();

    if (e.key === "ArrowDown" && canHightlightNext(highlightedIndex + 1)) {
      setHighlightedIndex(highlightedIndex + 1);
    } else if (
      e.key === "ArrowUp" &&
      canHighlightPrevious(highlightedIndex - 1)
    ) {
      setHighlightedIndex(highlightedIndex - 1);
    } else if (e.key === "Enter") {
      onSelect(highlightedIndex);
    }
  };

  const resetIndex = () => {
    setHighlightedIndex(-1);
  };

  return { highlightedIndex, handleKeyDown, resetIndex };
};

export default useKeyboardNavigation;