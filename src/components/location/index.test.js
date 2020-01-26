import React from "react";
import { render, cleanup } from '@testing-library/react';

import Location from "./";
import LocationContextProvider from "../../contexts/locations";

afterEach(cleanup);

it("renders Location", () => {
  const props = {
    name: "Sample location",
    lat: 20,
    lng: 30,
    date: '01.01.2020',
    index: 0,
  };

  const { asFragment } = render(
    <LocationContextProvider>
      <Location {...props} />
    </LocationContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});