import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  button: {
    height: 50,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  smallButton: {
    width: 90,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

export default style;