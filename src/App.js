import React, { useContext } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import styles from './App.module.scss';
import Location from "./components/location";
import LocationForm from "./form/location";
import LocationContextProvider, { Location as LocationContext } from "./contexts/locations";
import ErrorBoundary from "./components/errorBoundary";


const App = () => {
  const locationContext = useContext(LocationContext);
  const { locations } = locationContext;

  return (
    <div className={styles.appWrapper}>
      <Container>
        {locations.map((location, index) => {
          return (
            <Row key={index}>
              <Col>
                <ErrorBoundary>
                  <Location {...location} index={index}/>
                </ErrorBoundary>
              </Col>
            </Row>
          )
        })
        }
        <Row>
          <Col>
            <LocationForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const AppWrapper = () => (
  <LocationContextProvider>
    <App/>
  </LocationContextProvider>
);

export default AppWrapper;
