import React from 'react';
import moment from "moment";
import DaylightDuringDay from "./daylightDuringDay";
import DaylightAcrossDays from "./daylightAcrossDays";

const DaylightBar = ({ daylight }) => {
  const { sunrise, sunset } = daylight;

  const momentSunrise = moment(sunrise, 'H:mm:ss A');
  const momentSunset = moment(sunset, 'H:mm:ss A');

  const isBefore = momentSunrise.isBefore(momentSunset);

  return isBefore ? <DaylightDuringDay sunrise={sunrise} sunset={sunset}/> : <DaylightAcrossDays sunrise={sunrise} sunset={sunset}/>
};


export default DaylightBar;