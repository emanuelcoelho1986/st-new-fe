import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DropdownSelect, { INPUT_DEFAULT_VALUE, INPUT_TEST_ID } from './DropdownSelect'

const mockedOptions: Option[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
]
 
describe('DropdownSelect', () => {
  it('renders with default', () => {
    render(<DropdownSelect options={mockedOptions} />)
 
    const dropdown = screen.getByTestId(INPUT_TEST_ID);
 
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveValue(INPUT_DEFAULT_VALUE);
  });
})