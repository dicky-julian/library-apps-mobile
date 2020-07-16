import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../Button';
import textStyle from '../Text';
import style from './style';

const imgUrl = 'https://www.jaehakim.com/wp-content/uploads/2555/04/DescendantsoftheSun-top.jpg';

const Product = () => {
    return (
        <View style={{ marginBottom: 15 }}>
            <View style={style.productContainer}>
                <Image
                    style={style.productImg}
                    source={{ uri: imgUrl }}
                />
                <View style={style.productDetail}>
                    <Text style={{ ...style.productTitle, ...textStyle.bold, ...textStyle.h4, ...textStyle.dark }}>Descendant of The Sun Sun Sun</Text>
                    <Text style={{ ...textStyle.default, ...textStyle.dark }}>Descendants of the Sun” is a 2016 South Korean drama series directed by Lee Eung Bok ...</Text>
                </View>
            </View>

            <View style={style.productContainer}>
                <Image
                    style={style.productImg}
                    source={{ uri: imgUrl }}
                />
                <View style={style.productDetail}>
                    <Text style={{ ...style.productTitle, ...textStyle.bold, ...textStyle.h4, ...textStyle.dark }}>Descendant of The Sun Sun Sun</Text>
                    <Text style={{ ...textStyle.default, ...textStyle.dark }}>Descendants of the Sun” is a 2016 South Korean drama series directed by Lee Eung Bok ...</Text>
                </View>
            </View>

            <Button title='Load More' background='#e7e7e9' color='#000' />
        </View>
    )
}

export default Product;