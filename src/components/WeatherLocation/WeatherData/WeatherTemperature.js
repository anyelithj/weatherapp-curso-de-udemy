import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE } from './../../../constants/weathers';
import './styles.css';

const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case RAIN:
      return "rain";
    case SNOW:
      return "snow";
    case WINDY:
      return "windy";
    case THUNDER:
      return "day-thunderstorm";
    case DRIZZLE:
      return "day-showers";
    default:
      return "day-sunny";
  }
};
const getWeatherIcon = weatherState => {
  return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />)
}
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className='weatherTemperatureCont'>
    {getWeatherIcon(weatherState)}
    <span className='temperature'>{`${temperature}`} </span>
    <span className='temperaturetype'>C°</span>
  </div>
);
//vamos ausarla sobre el componente  WeatherTempeture debe ir despues de la
// definicion del componente ya antes de la expotación del componente
//creamos un objeto  donde tenemos las propiedades que queremos validar
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired, //Esto nos ayuda a obligar al usuario a ingresar solo el tipo de dato numerico.
  weatherState: PropTypes.string,
}

export default WeatherTemperature;