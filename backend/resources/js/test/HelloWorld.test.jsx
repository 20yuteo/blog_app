/**
 * @jest-environment jsdom
 */

import React, { Component } from "react";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import HelloWorld from "../views/HelloWorld";

it("Should render the default text", () => {
const { getByText } = render (<HelloWorld />);
    expect(getByText("Hello World!")).toBeInTheDocument();
});