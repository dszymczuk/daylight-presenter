import React from "react";
import { render, cleanup } from '@testing-library/react';
import ErrorBoundary from "./index";

afterEach(cleanup);

it("renders ErrorBoundary", () => {
  const { asFragment } = render(<ErrorBoundary>It'ss ok</ErrorBoundary>);
  expect(asFragment()).toMatchSnapshot();
});