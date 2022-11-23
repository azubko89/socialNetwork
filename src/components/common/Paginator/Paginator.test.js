import React from 'react';
import Paginator from './Paginator';
import { create } from "react-test-renderer";



describe('Paginator components name', ()=> {
    test('pages count is 11 but should be showed only 10', () => {
        const component = create( <Paginator totalItemsCount = {11} pageSize = {1} portionSize = {10} />);
        const root = component.root ();
        let span = root.findAllByType("span");
        expect(span.length).toBe (10)
    } )
    test('if pages count more then 10 button NEXT should be present', () => {
        const component = create( <Paginator totalItemsCount = {11} pageSize = {1} portionSize = {10} />);
        const root = component.root ();
        let button = root.findALLByType("button");
        expect(button.length).toBe (1)
    } )
})
