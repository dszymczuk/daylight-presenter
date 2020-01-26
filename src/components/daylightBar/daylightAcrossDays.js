import moment from "moment";
import styles from "./daylightBar.module.scss";
import { ProgressBar } from "react-bootstrap";
import React from "react";
import { calculateMinutes } from "./helpers";

const dayMinutes = 60 * 24;
const initialDate = moment().hour(0).minute(0).second(0).millisecond(0);
const endOfDay = moment().hour(23).minute(59).second(0).millisecond(0);

const DaylightAcrossDays = ({ sunrise, sunset }) => {
  const momentSunrise = moment(sunrise, 'H:mm:ss A');
  const momentSunset = moment(sunset, 'H:mm:ss A');
  const minutesAfterSunrise = calculateMinutes(moment.duration(endOfDay.diff(momentSunrise)).asMinutes());

  const minutesFromNewDayToEndOfSunset = calculateMinutes(moment.duration(momentSunset.diff(initialDate)).asMinutes());
  const minutesBetweenSunriseAndSunset = calculateMinutes(moment.duration(momentSunrise.diff(momentSunset)).asMinutes());

  return (
    <div className={styles.progressBarWrapper}>
      <ProgressBar>
        <ProgressBar variant="warning" now={minutesFromNewDayToEndOfSunset} key={1} max={dayMinutes}/>
        <ProgressBar variant="success" now={minutesBetweenSunriseAndSunset} key={2} max={dayMinutes}/>
        <ProgressBar variant="warning" now={minutesAfterSunrise} key={3} max={dayMinutes}/>
      </ProgressBar>
      <div className={styles.labels}>
        <div className={styles.startHour}>00:00</div>
        <div className={styles.endHour}>23:59</div>
      </div>
    </div>
  )
};

export default DaylightAcrossDays;