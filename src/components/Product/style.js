import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    productContainer: {
        width: '31%',
        marginBottom: 30
    },
    productImg: {
        height: 180,
        borderRadius: 5
    },
    productDetail: {
        paddingTop: 5
    },
    productTitle: {
        marginBottom: 10
    },
});

export default style;