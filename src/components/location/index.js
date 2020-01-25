import React, { useState, useEffect, useContext } from 'react';
import { Button, Card } from "react-bootstrap";
import DaylightBar from "../daylightBar";
import Coords from "../coords";
import styles from './location.module.scss';
import axios from 'axios';
import { Location as LocationContext } from "../../contexts/locations";


const Location = ({ lat, lng, name, date, index }) => {
  const { removeLocation } = useContext(LocationContext);
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
          <div>{date}
            <Button variant="outline-danger" size="sm" onClick={() => removeLocation(index)}>Remove</Button>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <DaylightBar daylight={daylightData}/>
      </Card.Body>
    </Card>
  )
};


export default Location;