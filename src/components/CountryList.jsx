/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import React from 'react'
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
// import City from './City'
import Message from "./Message";
import CountryItem from "./CountryItem";
import  {useCity}  from "../context/CityContext";

export default function CountryList() {
  const {cities, isLoading}= useCity();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on map" />;

  const country = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else {
      return [...arr];
    }
  }, []);
  return (
    <ul className={styles.countryList}>
      {country.map((country) => {
        return <CountryItem country={country} key={country.country}/>;
      })}
    </ul>
  );
}
