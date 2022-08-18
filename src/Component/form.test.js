import React from "react";
import {fireEvent,screen,render} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Form from './form';
import { Simulate } from 'react-dom/test-utils';

describe('Form test cases',()=>{
    it("Should input get focus when clicked in input box",()=>{
        const component = render(<Form />)
        const input = screen.getByTestId("firstName").querySelector("input")
        expect(input).toBeInTheDocument();
        fireEvent.click(input)
        expect(input).toHaveFocus()

        
    })
    it("Should input label move upwards when clicked in input box",()=>{
        const component = render(<Form />)
        const input = screen.getByTestId("firstName").querySelector("input")
        const label = screen.getByTestId("firstName").firstElementChild
        fireEvent.click(input)
        expect(label).toHaveAttribute("data-shrink","true")
    })

})