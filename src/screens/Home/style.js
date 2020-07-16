import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBg : {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').height - 125,
    resizeMode: 'cover',
  },
  headerContainer: {
    width: Dimensions.get('window').width - 30,
    backgroundColor: 'transparent',
    marginTop: -50
  },
  headerInput: {
    marginBottom: 75,
    padding: 13,
    backgroundColor: '#fff',
    borderColor: '#fff',
    color: '#000',
    borderRadius: 5,
    fontSize: 17
  },
  headerText: {
    marginLeft: 0,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff'
  },
  listContainer: {
    paddingLeft: 15,
    paddingRight: 15
  },
  listPopular: {
    marginTop: -150,
  },
  listAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  button: {
    width: 100,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#272829',
    borderRadius: 5
  }
});

export default style;