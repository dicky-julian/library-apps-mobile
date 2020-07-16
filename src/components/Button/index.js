import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import textStyle from '../Text';
import style from './style';

const Button = (props) => {
    return (
        <TouchableOpacity style={{ ...style.button, backgroundColor: props.background }}>
            <Text style={{ fontSize: 15, color: props.color }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;