import React from 'react';
import ReactCarousel from 'react-native-snap-carousel';
import { Image, Text, View } from 'react-native';
import textStyle from '../Text';
import style from './style';

const imgUrl = 'https://www.jaehakim.com/wp-content/uploads/2555/04/DescendantsoftheSun-top.jpg';

const _renderItem = ({ item }) => (
    <View style={style.carouselList}>
        <Image
            style={style.productImg}
            source={{ uri: imgUrl }}
        />
        <View style={style.productDetail}>
            <Text style={{...style.productTitle, ...textStyle.h3, ...textStyle.light}}>{item.title}</Text>
            <Text style={{...textStyle.default, ...textStyle.fade}}>{item.text}</Text>
            <Text style={{...style.productLink, ...textStyle.default, ...textStyle.light}}>Read More</Text>
        </View>
    </View>
)

const Carousel = ({ data }) => {
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