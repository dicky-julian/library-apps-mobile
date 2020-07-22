import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { smallButton as Button } from '../Button';
import { EditIcon, TrashIcon } from '../Icons';
import TextStyle from '../Text';
import style from './style';
import { baseUrl } from '../../utils/apis/service';



const List = ({ index, book, author, genre }) => {
    let data = index === 'book' ? book : index === 'author' ? author : genre;
    const imgUrl = `${baseUrl}/images/`;
    const navigation = useNavigation();
    return (
        <>
            {data.map((data, key) => {
                return (
                    <TouchableOpacity
                    key={key}
                        style={style.container}
                        onPress={index === 'book' ? () => navigation.navigate('Home', {
                            screen: 'Book',
                            params: { id: data.id }
                        }) : () => {return}}>
                        {data.image ?
                            <Image
                                style={style.image}
                                source={{ uri: `${imgUrl}${data.image}` }}
                            /> : <></>}
                        <View>
                            <Text style={TextStyle.h5}>{data.title || data.name}</Text>
                            <Text style={TextStyle.fade}>{data.rating ? `${data.rating} Rating` : ''}</Text>
                        </View>
                        <View style={style.action}>
                            <EditIcon style={style.actionIcon} />
                            <TrashIcon style={style.actionIcon} />
                            {data.status ?
                                <Button
                                    title={data.status === 1 ? 'Available' : 'Unavailable'}
                                    background={data.status === 1 ? '#ece6ff' : '#ffe7e7'}
                                    color={data.status === 1 ? '#845de7' : '#e75d5d'} />
                                : <></>}
                        </View>
                    </TouchableOpacity>
                )
            })}
        </>
    )
}

export default List;