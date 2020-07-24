import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View } from 'react-native';
import style from './style';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ ...style.button, backgroundColor: props.background, ...props.style }}>
            {props.loading ?
                <View style={style.loading}>
                    <ActivityIndicator size="small" color={props.color} />
                    <Text style={{ marginLeft: 10, fontSize: 15, color: props.color }}>Loading</Text>
                </View>
                :
                <Text style={{ fontSize: 15, color: props.color, textTransform: 'capitalize', ...props.textStyle }}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
}

export const smallButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ ...style.smallButton, backgroundColor: props.background, ...props.style, width: props.width, }}>
            <Text style={{ fontSize: 15, color: props.color, textTransform: 'capitalize' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;