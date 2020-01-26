import React from "react";
import { render, cleanup } from '@testing-library/react';

import Input from "./index";

afterEach(cleanup);

it("renders Input", () => {
  const props = {
    label: "Sample label",
    field: {
      name: "sampleName",
      value: "",
      onChange: () => {
      }
    }, form: {
      errors: []
    }
  };

  const { asFragment } = render(<Input {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders Input with errors", () => {
  const props = {
    label: "Sample label",
    field: {
      name: "sampleName",
      value: "",
      onChange: () => {
      }
    }, form: {
      errors: {
        sampleName: "Sample error"
      }
    }
  };

  const { asFragment } = render(<Input {...props} />);
  expect(asFragment()).toMatchSnapshot();
});