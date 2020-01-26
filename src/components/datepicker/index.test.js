import React from "react";
import { render, cleanup } from '@testing-library/react';
import DatePicker from "./index";

afterEach(cleanup);

it("renders DatePicker", () => {
  const props = {
    field: {
      name: "datePicker",
      value: new Date()
    },
    form: {
      setFieldValue: () => {
      },
      setFieldTouched: () => {
      }
    }
  };

  const { asFragment } = render(<DatePicker {...props}/>);
  expect(asFragment()).toMatchSnapshot();
});