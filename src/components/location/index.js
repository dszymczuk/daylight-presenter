import React, { useState, useEffect } from 'react';
import { Card } from "react-bootstrap";
import DaylightBar from "../daylightBar";
import Coords from "../coords";
import styles from './location.module.scss';
import axios from 'axios';


const Location = ({ lat, lng, name, date }) => {
  const [daylightData, setDaylightData] = useState({
    sunrise: "",
    sunset: "",
  });

  useEffect(() => {
    const getLocationData = async () => {
      try {
        const { data: { results } } = await axios({
          url: 'https://api.sunrise-sunset.org/json',
          method: 'get',
          params: {
            lat,
            lng,
            date
          }
        });
        const { sunrise, sunset } = results;
        setDaylightData({ sunrise, sunset });
      } catch (err) {
        console.error(err)
      }
    };

    getLocationData();
  }, [lat, lng, date]);


  return (
    <Card>
      <Card.Header as="h5">
        <div className={styles.header}>
          <div>{name} <Coords lat={lat} lng={lng}/></div>
          <div>{date}</div>
        </div>
      </Card.Header>
      <Card.Body>
        <DaylightBar daylight={daylightData}/>
      </Card.Body>
    </Card>
  )
};


export default Location;