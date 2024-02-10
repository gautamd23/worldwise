/* eslint-disable react/prop-types */
// import React from 'react'
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
// import City from './City'
import Message from "./Message";
import CityItem from "./CityItem";
import {useCity } from "../context/CityContext";

export default function CityList() {
  const {cities, isLoading} = useCity();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}
