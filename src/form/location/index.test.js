import React from "react";
import { render, cleanup } from '@testing-library/react';
import { AddForm, EditForm } from "./index";
import LocationContextProvider from "../../contexts/locations";
import moment from "moment";

afterEach(cleanup);

it("renders AddForm", () => {
  const initialValues = {
    name: "",
    lat: '',
    lng: '',
    date: moment('26.01.2020 00:00:00', 'DD.MM.YYYY HH:mm:ss').toDate(),
  };

  const { asFragment } = render(
    <LocationContextProvider>
      <AddForm initialValues={initialValues}/>
    </LocationContextProvider>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders EditForm", () => {
  const props = {
    initialValues: {
      name: "Sample location",
      lat: 20,
      lng: 30,
      date: moment('26.01.2020 00:00:00', 'DD.MM.YYYY HH:mm:ss').toDate(),
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