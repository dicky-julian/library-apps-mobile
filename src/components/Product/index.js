import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../utils/apis/service';
import textStyle from '../Text';
import style from './style';

const url = `${baseUrl}/images/`;

const Product = (props) => {
    const datas = props.data;
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            {datas ?
                datas.length ?
                    datas.map((data, index) => {
                        return (
                            <TouchableOpacity
                                style={style.productContainer}
                                key={index}
                                onPress={() => navigation.navigate('Book', {
                                    id: data.id,
                                })} >
                                <Image
                                    style={style.productImg}
                                    source={{ uri: `${url}${data.image}` }}
                                />
                                <View style={style.productDetail}>
                                    <Text style={{ ...style.productTitle, ...textStyle.h5, ...textStyle.dark }}>{data.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                    : <Text>Gaonok</Text> : <Text>Gaonok</Text>
            }
        </View>
    )
}

export default Product;