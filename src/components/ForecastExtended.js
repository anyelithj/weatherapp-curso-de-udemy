import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/* const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];
const data = {
  temperature: 10,
  humidity: 10,
  weatherState: "normal",
  wind: "normal"
}; */
const api_key = "f09d1b162e2c4ab195077f1fba85ebc2";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
     constructor() {
         super();
         this.state = { forecastData: null }   
          }
    
     componentDidMount() {
         const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        
         fetch(url_forecast).then(
            
             data => (data.json())
         ).then(
             weather_data => {
                              
                               console.log(weather_data);
                               const forecastData = transformForecast(weather_data); 
                               console.log(forecastData);
                               this.setState({forecastData});
                             }
         );


     }
     
    renderForecastItemDays() {
        return <h1>Render Items</h1>;
        //return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data}/>));
    }
    renderProgress = () => {
        return <h3>Cargando Pronóstico extendido...</h3>;
    }
    render() {
     
        const { city } = this.props;
        const { forecastData } = this.state;
        return <div>
            <h2 className="forecast-title ">
              {" "}
              Pronostico Extendido para {city}{" "}
            </h2>
            {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
          </div>;
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;