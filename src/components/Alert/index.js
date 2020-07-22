import { Alert } from 'react-native';

const showAlert = (title, desc) =>
    Alert.alert(
        title,
        desc,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );

export default showAlert;