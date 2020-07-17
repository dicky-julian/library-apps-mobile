import React, { useState } from 'react';
import { ImageBackground, Text, ScrollView, View } from 'react-native';
import { Button,List, TextStyle } from '../../components';
import style from './style';

const Database = () => {
    return (
        <ScrollView>
            <Text style={{ ...TextStyle.h3, ...style.title }}>Welcome back, Nabila Rahmadanti</Text>
            {/* Table Navigation */}
            <ScrollView horizontal={true} style={style.listAction}>
                <ImageBackground source={require('../../assets/images/Database/bg_blue.png')} style={style.action} imageStyle={{ borderRadius: 5 }}>
                    <Text style={{ ...TextStyle.h4, ...TextStyle.light, marginBottom: 5 }}>Book</Text>
                    <Text style={{ ...TextStyle.default, ...TextStyle.light }}>Controls book's datas</Text>
                </ImageBackground>
                <ImageBackground source={require('../../assets/images/Database/bg_cyan.png')} style={style.action} imageStyle={{ borderRadius: 5 }}>
                    <Text style={{ ...TextStyle.h4, ...TextStyle.light, marginBottom: 5 }}>Author</Text>
                    <Text style={{ ...TextStyle.default, ...TextStyle.light }}>Controls author's datas</Text>
                </ImageBackground>
                <ImageBackground source={require('../../assets/images/Database/bg_orange.png')} style={style.action} imageStyle={{ borderRadius: 5 }}>
                    <Text style={{ ...TextStyle.h4, ...TextStyle.light, marginBottom: 5 }}>Genre</Text>
                    <Text style={{ ...TextStyle.default, ...TextStyle.light }}>Controls genre's datas</Text>
                </ImageBackground>
            </ScrollView>

            {/* Table View  */}
            <View style={style.tableContainer}>
                <View style={style.tableHeader}>
                    <Text style={{ ...TextStyle.h3 }}>Book's Datas</Text>
                    <Button title='Add Book' background='#845de7' color='#fff'/>
                </View>
                <View>
                    <List image='' name='' rating='' status={1} />
                    <List image='' name='' rating='' status={0} />
                    <List image='' name='' rating='' status={1} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Database;