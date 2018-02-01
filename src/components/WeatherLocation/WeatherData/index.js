import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
/* 
TIPOS DE COMPONENTES
  -Functional Component
  -Class Component

*/

/*const WeatherData = () => (
  <div className='weatherDataCont'>
    <WeatherTemperature temperature={20} weatherState={SNOW} />
    <WeatherExtraInfo humidity={80} wind={"10m/s"} />
  </div>
);
*/

//  refactorizamos la anterior función con un a row function multilinea 
const WeatherData = ({ data }) => { //data es un parametro de weatherData
  const { temperature, weatherState, humidity, wind} = data; // constante que tiene distintas variables y se extrae a la variable data
  return ( //essta función debe tener obligatoriamente un return
    <div className='weatherDataCont'>
      <WeatherTemperature temperature={temperature} weatherState={weatherState} />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  );
};
WeatherData.propTypes = {
  data: PropTypes.shape({
    //espera un objeto de la siguiente forma
    temperature:PropTypes.number.isRequire,
    weatherState: PropTypes.string.isRequire,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,

  }),
};

export default WeatherData;