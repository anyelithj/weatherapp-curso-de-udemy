import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'locationList': {
    'height': [{ 'unit': 'vh', 'value': 85 }],
    'overflow': 'auto',
    '<w64': {
      'maxHeight': [{ 'unit': 'vh', 'value': 40 }],
      // max-height para que el alto de la lista no supere el 30vh
      // overflow: auto;
      'marginBottom': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  'forecast-title': {
    'color': 'white',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  }
});
