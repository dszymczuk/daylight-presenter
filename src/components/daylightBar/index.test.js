import React from "react";
import { render, cleanup } from '@testing-library/react';
import DaylightAcrossDays from "./daylightAcrossDays";
import DaylightDuringDay from "./daylightDuringDay";
import Daylight from "./index";

afterEach(cleanup);

it("renders DaylightAcrossDays", () => {
  const props = {
    sunrise: "6:23:54 AM",
    sunset: "7:12:32 PM"
  };
  const { asFragment } = render(<DaylightAcrossDays {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders DaylightDuringDay", () => {
  const props = {
    sunrise: "6:23:54 AM",
    sunset: "7:12:32 PM"
  };
  const { asFragment } = render(<DaylightDuringDay {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders Daylight when sunset is after sunrise", () => {
  const daylight = {
    sunrise: "6:23:54 AM",
    sunset: "7:12:32 PM"
  };
  const { asFragment } = render(<Daylight daylight={daylight}/>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders Daylight when sunset is after sunrise", () => {
  const daylight = {
    sunrise: "6:23:54 PM",
    sunset: "7:12:32 AM"
  };
  const { asFragment } = render(<Daylight daylight={daylight}/>);
  expect(asFragment()).toMatchSnapshot();
});