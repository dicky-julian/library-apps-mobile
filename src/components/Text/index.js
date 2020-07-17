import { StyleSheet } from 'react-native';

const TextStyle = StyleSheet.create({
    h1: {
        fontSize: 35,
        lineHeight: 45
    },
    h2: {
        fontSize: 30,
        lineHeight: 40
    },
    h3: {
        fontSize: 25,
        lineHeight: 35
    },
    h4: {
        fontSize: 22,
        lineHeight: 32
    },
    default: {
        fontSize: 17,
        lineHeight: 27
    },
    h6: {
        fontSize: 15,
        lineHeight: 22
    },
    bold: {
        fontWeight: '700'
    },
    thin: {
        fontWeight: '100'
    },
    secondary: {
        color: '#dad272'
    },
    light:{
        color: '#fff'
    },
    dark: {
        color: '#000'
    },
    fade: {
        color: '#b0b0b0'
    }
  });
  
  export default TextStyle;