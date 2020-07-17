import React from 'react';
import { Image, Text, View } from 'react-native';
import textStyle from '../Text';
import style from './style';

const imgUrl = 'https://www.jaehakim.com/wp-content/uploads/2555/04/DescendantsoftheSun-top.jpg';

const Product = () => {
    return (
        <View style={style.container}>
            <View style={style.productContainer}>
                <Image
                    style={style.productImg}
                    source={{ uri: imgUrl }}
                />
                <View style={style.productDetail}>
                    <Text style={{ ...style.productTitle, ...textStyle.h6, ...textStyle.dark }}>Descendant of The Sun Sun Sun</Text>
                </View>
            </View>
            <View style={style.productContainer}>
                <Image
                    style={style.productImg}
                    source={{ uri: imgUrl }}
                />
                <View style={style.productDetail}>
                    <Text style={{ ...style.productTitle, ...textStyle.h6, ...textStyle.dark }}>Descendant of The Sun Sun Sun</Text>
                </View>
            </View>
            <View style={style.productContainer}>
                <Image
                    style={style.productImg}
                    source={{ uri: imgUrl }}
                />
                <View style={style.productDetail}>
                    <Text style={{ ...style.productTitle, ...textStyle.h6, ...textStyle.dark }}>Descendant of The Sun Sun Sun</Text>
                </View>
            </View>
            <View style={style.productContainer}>
                <Image
                    style={style.productImg}
                    source={{ uri: imgUrl }}
                />
                <View style={style.productDetail}>
                    <Text style={{ ...style.productTitle, ...textStyle.h6, ...textStyle.dark }}>Descendant of The Sun Sun Sun</Text>
                </View>
            </View>
            <View style={style.productContainer}>
                <Image
                    style={style.productImg}
                    source={{ uri: imgUrl }}
                />
                <View style={style.productDetail}>
                    <Text style={{ ...style.productTitle, ...textStyle.h6, ...textStyle.dark }}>Descendant of The Sun Sun Sun</Text>
                </View>
            </View>
            <View style={style.productContainer}>
                <Image
                    style={style.productImg}
                    source={{ uri: imgUrl }}
                />
                <View style={style.productDetail}>
                    <Text style={{ ...style.productTitle, ...textStyle.h6, ...textStyle.dark }}>Descendant of The Sun Sun Sun</Text>
                </View>
            </View>
            
        </View>
    )
}

export default Product;