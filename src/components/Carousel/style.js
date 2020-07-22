import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50
  },
  carouselList: {
    marginLeft: 15
  },
  productImg: {
    width: 300,
    height: 150,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  productDetail: {
    width: 300,
    marginTop: -1,
    padding: 20,
    paddingBottom: 30,
    backgroundColor: '#272829',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  productTitle: {
    marginTop: -35,
    marginBottom: 10
  },
  productLink: {
    marginTop: 10,
    textAlign: 'right'
  }
});

export default style;