import React from "react";
import { render, cleanup } from '@testing-library/react';
import Coords from "./index";

afterEach(cleanup);

it("renders Coords", () => {
  const { asFragment } = render(<Coords lat={20} lng={30}/>);
  expect(asFragment()).toMatchSnapshot();
});