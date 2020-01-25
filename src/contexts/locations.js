import React, { useState } from 'react';

export const Location = React.createContext();

export const LocationContextProvider = ({ children }) => {

  const [locations, setLocations] = useState([
    {
      lat: 50.064651,
      lng: 19.944981,
      name: "Kraków",
      date: "24.01.2020"
    },
    {
      name: "Tokio",
      lat: 39.758602,
      lng: -104.997437,
      date: "25.01.2020"
    },
    {
      name: "New York",
      lat: 55.755825,
      lng: 37.617298,
      date: "25.01.2020"
    }
  ]);

  const addLocation = (newLocation) => {
    setLocations([...locations, newLocation])
  };

  const updateLocation = ({ location, index }) => {

  };

  const removeLocation = (index) => {
    const newLocations  = [...locations];
    newLocations.splice(index,1);
    setLocations(newLocations)
  };


  const providedData = {
    locations,
    addLocation,
    updateLocation,
    removeLocation
  };

  return (
    <Location.Provider value={providedData}>
      {children}
    </Location.Provider>
  );
};

export default LocationContextProvider;

export const LocationContextConsumer = Location.Consumer;