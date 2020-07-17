import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    title: {
        margin: 15,
        marginTop: 30
    },
    listAction: {
        flexDirection: 'row',
        padding: 15
    },
    action: {
        width: Dimensions.get('window').width - 75,
        marginRight: 15,
        padding: 25,
        paddingBottom: 35
    },
    tableContainer: {
        marginTop: 15,
        padding: 15
    },
    tableHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    }
});

export default style;