import React from 'react';
import ReactCarousel from 'react-native-snap-carousel';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { baseUrl } from '../../utils/apis/service';
import textStyle from '../Text';
import style from './style';

const url = `${baseUrl}/images/`;

const _renderItem = ({ item }) => (
    <TouchableOpacity style={style.carouselList}>
        <Image
            style={style.productImg}
            source={{ uri: `${url}${item.image}` }}
        />
        <View style={style.productDetail}>
            <Text style={{...style.productTitle, ...textStyle.h4, ...textStyle.light, ...textStyle.bold}}>{item.title}</Text>
            <Text style={{...textStyle.h5, ...textStyle.fade}}>{item.description.substring(0, 100)} . . .</Text>
            <Text style={{...style.productLink, ...textStyle.h5, ...textStyle.light}}>Read More</Text>
        </View>
    </TouchableOpacity>
)

export const Carousel = ({ data }) => {
    const [Index, setIndex] = React.useState(0);
    return (
        <View style={style.carouselContainer}>
            <ReactCarousel
                layout={"default"}
                data={data}
                sliderWidth={300}
                itemWidth={300}
                renderItem={_renderItem}
                onSnapToItem={index => setIndex(index)}
            />
        </View>
    )
}

export default Carousel;