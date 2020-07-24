import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    modalMenu: {
        width: 175,
        marginTop: 20,
        borderColor: '#000'
    },
    profile: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#272829'
    },
    profileImg: {
        width: 75,
        height: 75,
        marginTop: -15,
        borderRadius: 50
    },
    icon: {
        width: 95,
        height: 22,
        marginLeft: 10
    },
    menuIcon: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    closeIcon: {
        width: 25,
        height: 25,
        alignSelf: 'flex-end'
    },
    modalContainer: {
        width: 200,
        margin: 15,
        marginTop: 50,
        padding: 15,
        backgroundColor: '#272829',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        alignSelf: 'flex-end'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default style;