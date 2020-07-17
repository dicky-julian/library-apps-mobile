import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from './style';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ ...style.button, backgroundColor: props.background }}>
            <Text style={{ fontSize: 15, color: props.color }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export const smallButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ ...style.smallButton, backgroundColor: props.background }}>
            <Text style={{ fontSize: 15, color: props.color }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;