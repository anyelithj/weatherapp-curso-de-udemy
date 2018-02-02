import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'locationCont': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'textAlign': 'left',
    // padding-left: 10px;
    'color': '#888',
    'lineHeight': [{ 'unit': 'px', 'value': 35 }]
  },
  'locationCont h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'weatherLocationCont': {
    // margin: 30px;   
    width: 400px;
    padding: 15px;
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': '%H', 'value': NaN }],
    'minWidth': [{ 'unit': 'px', 'value': 430 }],
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }],
    'boxSizing': 'border-box',
    'fontFamily': ''Roboto', sans-serif',
    'boxShadow': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 42 }, { 'unit': 'px', 'value': -12 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.75)' }],
    'cursor': 'pointer'
  }
});
