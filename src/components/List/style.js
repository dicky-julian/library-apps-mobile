import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e4e8'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionIcon: {
        width: 20, 
        height: 20,
        marginRight: 10
    }
});

export default style;