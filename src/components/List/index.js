import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { smallButton as Button } from '../Button';
import { EditIcon, TrashIcon } from '../Icons';
import TextStyle from '../Text';
import style from './style';

const imgUrl = 'https://www.jaehakim.com/wp-content/uploads/2555/04/DescendantsoftheSun-top.jpg';

const List = (props) => {
    return (
        <View style={style.container}>

            <Image
                style={style.image}
                source={{ uri: imgUrl }}
            />
            <View>
                <Text style={TextStyle.default}>Descendant of The sun</Text>
                <Text style={TextStyle.fade}>9 Rating</Text>
            </View>
            <View style={style.action}>
                <EditIcon style={style.actionIcon} />
                <TrashIcon style={style.actionIcon} />
                <Button title={props.status ? 'Available' : 'Unavailable'} background={props.status ? '#ece6ff' : '#ffe7e7'} color={props.status ? '#845de7' : '#e75d5d'} />
            </View>

        </View>
    )
}

export default List;