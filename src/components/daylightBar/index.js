import React from 'react';
import { ProgressBar } from "react-bootstrap";
import styles from './daylightBar.module.scss';
import moment from "moment";


const DaylightBar = ({ sunrise, sunset }) => {
  const dayMinutes = 60 * 24;

  const momentSunrise = moment(sunrise);
  const momentSunset = moment(sunset);
  const day = momentSunrise.date();
  const month = momentSunrise.month();
  const year = momentSunrise.year();

  const initialDate = moment().date(day).month(month).year(year).hour(0).minute(0);

  const minutesBeforeSunrise = moment.duration(momentSunrise.diff(initialDate)).asMinutes();
  const minutesBeforeDaylight = dayMinutes - (dayMinutes - minutesBeforeSunrise);

  const daylightMinutes = moment.duration(momentSunset.diff(momentSunrise)).asMinutes();
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


export default DaylightBar;