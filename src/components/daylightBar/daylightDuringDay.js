import moment from "moment";
import styles from "./daylightBar.module.scss";
import { ProgressBar } from "react-bootstrap";
import React from "react";
import { calculateMinutes } from "./helpers";

const dayMinutes = 60 * 24;
const initialDate = moment().hour(0).minute(0).second(0).millisecond(0);

const DaylightDuringDay = ({ sunrise, sunset }) => {
  const momentSunrise = moment(sunrise, 'H:mm:ss A');
  const momentSunset = moment(sunset, 'H:mm:ss A');

  const minutesBeforeSunrise = calculateMinutes(moment.duration(momentSunrise.diff(initialDate)).asMinutes());

  const minutesBeforeDaylight = dayMinutes - (dayMinutes - minutesBeforeSunrise);

  const daylightMinutes = calculateMinutes(moment.duration(momentSunset.diff(momentSunrise)).asMinutes());
  const minutesAfterDaylight = dayMinutes - minutesBeforeDaylight - daylightMinutes;

  return (
    <div className={styles.progressBarWrapper}>
      <ProgressBar>
        <ProgressBar variant="success" now={minutesBeforeDaylight} key={1} max={dayMinutes}/>
        <ProgressBar variant="warning" now={daylightMinutes} key={2} max={dayMinutes}/>
        <ProgressBar variant="success" now={minutesAfterDaylight} key={3} max={dayMinutes}/>
      </ProgressBar>
      <div className={styles.labels}>
        <div className={styles.startHour}>00:00</div>
        <div className={styles.endHour}>23:59</div>
      </div>
    </div>
  )
};

export default DaylightDuringDay;