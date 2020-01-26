import React from "react";
import { render, cleanup } from '@testing-library/react';
import { AddForm, EditForm } from "./index";
import LocationContextProvider from "../../contexts/locations";

afterEach(cleanup);

it("renders AddForm", () => {
  const { asFragment } = render(
    <LocationContextProvider>
      <AddForm/>
    </LocationContextProvider>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders EditForm", () => {
  const props = {
    initialValues: {
      name: "Sample location",
      lat: 20,
      lng: 30,
      date: new Date()
    },
    index: 0,
    onSubmitCb: () => {
    }
  };
  const { asFragment } = render(
    <LocationContextProvider>
      <EditForm {...props} />
    </LocationContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});