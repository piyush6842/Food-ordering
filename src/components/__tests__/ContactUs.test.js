import { render,screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"


test('should ', () => {
    render(<ContactUs />)
  const heading = screen.getByRole("heading")
  expect(heading).toBeInTheDocument();
})
