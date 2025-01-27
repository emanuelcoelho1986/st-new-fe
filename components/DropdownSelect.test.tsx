import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DropdownSelect, { INPUT_DEFAULT_VALUE, INPUT_TEST_ID } from './DropdownSelect'
 
describe('DropdownSelect', () => {
  it('renders with default', () => {
    render(<DropdownSelect />)
 
    const dropdown = screen.getByTestId(INPUT_TEST_ID);
 
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveValue(INPUT_DEFAULT_VALUE);
  });
})