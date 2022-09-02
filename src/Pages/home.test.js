import React from "react";
import { fireEvent, screen, render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Home from "./Home";

describe("Home test cases", () => {
    it('should change color in pagination when clicked on next page', () => {
        const component = render(<Home />)
        const nextButton = screen.getByTestId("NavigateNextIcon")
        const button = screen.getByText("2")
        expect(button).toHaveStyle({ backgroundColor: 'transparent' })
        fireEvent.click(nextButton)
        expect(button).toHaveAttribute("class", "MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular MuiPaginationItem-textPrimary Mui-selected MuiPaginationItem-page css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root")
    })

    it('should navigate back disabled in the beginning', () => {
        const component = render(<Home />)
        //To get parent of svg closest is used as button gets disabled not the svg
        const backButton = screen.getByTestId("NavigateBeforeIcon").closest("button")
        console.log(backButton)
        expect(backButton).toBeDisabled()
    })

    it('should next button disabled on clicking last element', () => {
        const component = render(<Home />)
        const nextButton = screen.getByTestId("NavigateNextIcon").closest("button")
        expect(nextButton).not.toBeDisabled()
        const lastButton = screen.getByText("10")
        fireEvent.click(lastButton)
        expect(nextButton).toBeDisabled()
    })

    it('should open modal on clicking modal button', () => {
        const component = render(<Home />)
        const modalButton = screen.getByTestId("modalButton")
        fireEvent.click(modalButton)
        const modal = screen.getByTestId("my-modal")
        expect(modal).toBeInTheDocument()
    })

    it('should get underline when mouse is hovred on Home', () => {
        const component = render(<Home />)
        const home = screen.getByTestId("home")
        fireEvent.mouseOver(home)
        expect(home).toHaveClass("MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineAlways MuiLink-button css-ia03sn-MuiTypography-root-MuiLink-root")
    })

    it('should change header of modal when clicked on change', () => {
        const component = render(<Home />)
        const modalButton = screen.getByTestId("modalButton")
        fireEvent.click(modalButton)
        const modal = screen.getByTestId("my-modal")
        expect(modal).toBeInTheDocument()
        const head = screen.getByText("Not Set")
        expect(head).toBeInTheDocument()
        fireEvent.click(screen.getByTestId("changeHead"))
        const newHead = screen.getByText("header set")
        expect(newHead).toBeInTheDocument()
        screen.debug(undefined, 30000)
    })
})