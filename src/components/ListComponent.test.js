import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ListComponent from "./ListComponent";
import strings from '../util/strings';

let container = null;
beforeEach(() => {
// setup a DOM element as a render target
container = document.createElement("div");
document.body.appendChild(container);
});

afterEach(() => {
// cleanup on exiting
unmountComponentAtNode(container);
container.remove();
container = null;
});


it("renders with or without items provided", () => {
    act(() => {
        render(<ListComponent/>, container);
    });
    expect(container.textContent).toMatch(strings.NO_ITEMS);
    expect(container.textContent).toMatch(strings.LOAD_MORE);
    
    act(() => {
        render(<ListComponent items={[{id: 1, name: 'One'},{id: 2, name: 'Two'}]} />, container);
    });
    expect(container.childNodes[0].innerHTML).toContain("<table");
});