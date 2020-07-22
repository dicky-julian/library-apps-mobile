import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  // Home Component
  container: {
    backgroundColor: '#fff'
  },
  headerBg: {
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
    paddingRight: 15,
    marginBottom: 30
  },
  listPopular: {
    marginTop: -150,
  },
  listAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  // Book Component
  bookHeader: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productContainer: {
    marginTop: -120,
    marginBottom: 60,
    padding: 15
  },
  productImg: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 5
  },
  productDescription: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  description: {
    textAlign: 'justify',
    marginTop: 15
  },
  productInfo: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  info: {
    width: '50%',
    alignItems: 'center',
    borderLeftColor: '#b0b0b0'
  },
  productDetail: {
    alignItems: 'center'
  },
  detail: {
    marginBottom: 25,
    alignItems: 'center'
  },
  detailTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  actionIcon: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  backIcon: {
    width: 25,
    height: 25
  },
  backIconWrapper: {
    width: 50, 
    height: 50,
    position: 'absolute',
    alignSelf:'flex-start',
    top: 15,
    left: 15,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343434a8',
    borderRadius: 5
  },
  btBorrow: {
    position: 'absolute',
    alignSelf:'flex-end',
    bottom: 15,
    left: 15,
    right: 15
  }
});

export default style;