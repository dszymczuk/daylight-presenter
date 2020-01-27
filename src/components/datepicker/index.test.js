import React from "react";
import { render, cleanup } from '@testing-library/react';
import DatePicker from "./index";
import moment from "moment";

afterEach(cleanup);

it("renders DatePicker", () => {
  const props = {
    field: {
      name: "datePicker",
      value: moment('26.01.2020 00:00:00', 'DD.MM.YYYY HH:mm:ss').toDate()
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