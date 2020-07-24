import React from 'react';
import { Image, Text, View } from 'react-native';
import style from './style';

const Empty = () => {
    return (
        <View style={style.container}>
            <Image source={require('../../assets/images/Home/empty.png')} style={style.image} />
            <Text style={style.message}>Can't found data</Text>
        </View>
    )
}

export default Empty;