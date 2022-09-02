import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fireEvent, screen, render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import SignUp from './Signup';

describe('SignUp  test cases', () => {
    it("Should input get focus when clicked in input box", () => {
        //If Component uses useNavigate then it must be wrapped in Router tags
        const component = render(<BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
            </Routes>
        </BrowserRouter>)
        const input = screen.getByTestId("firstName").querySelector("input")
        expect(input).toBeInTheDocument();
        fireEvent.click(input)
        expect(input).toHaveFocus()
    })

    it("Should input label move upwards when clicked in input box", () => {
        const component = render(<BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
            </Routes>
        </BrowserRouter>)
        const input = screen.getByTestId("firstName").querySelector("input")
        const label = screen.getByTestId("firstName").firstElementChild
        fireEvent.click(input)
        expect(label).toHaveAttribute("data-shrink", "true")
    })

    it("Should input get value  when keydown in input box", () => {
        const component = render(<BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
            </Routes>
        </BrowserRouter>)
        const input = screen.getByTestId("firstName").querySelector("input")
        const label = screen.getByTestId("firstName").firstElementChild
        fireEvent.click(input)
        fireEvent.change(input, { target: { value: "305" } })
        screen.debug(undefined, 30000)
        expect(input).toHaveValue("305")
    })

    it("Should checkbox get checked on clicking", () => {
        const component = render(<BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
            </Routes>
        </BrowserRouter>)
        const checkbox = screen.getByTestId("checkbox").querySelector("input")
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()
    })
})