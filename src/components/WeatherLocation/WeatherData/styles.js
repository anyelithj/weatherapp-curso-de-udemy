import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // CSSModules
  'weatherDataCont': {
    'background': 'rgba(200, 200, 200, 0.5)',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'lineHeight': [{ 'unit': 'px', 'value': 100 }],
    'borderRadius': '5px'
  },
  'weatherTemperatureCont': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'display': 'inline-block'
  },
  'temperature': {
    'fontSize': [{ 'unit': 'px', 'value': 35 }],
    'fontWeight': 'bold',
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'temperaturetype': {
    'fontWeight': 'bold',
    'color': '#666'
  },
  'wicon': {
    'color': 'rebeccapurple'
  },
  'weatherExtraInfoCont': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'textAlign': 'left'
  },
  'extraInfoText': {
    'display': 'block',
    'color': '#1535c5',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontWeight': 'bold'
  }
});
