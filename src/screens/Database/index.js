import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { Button, List, TextStyle } from '../../components';
import style from './style';

const Database = (props) => {
    const [index, setIndex] = useState('book')
    const book = props.book.book;
    const author = props.book.author;
    const genre = props.book.genre;

    return (
        <ScrollView>
            {book && author && genre ?
                <>
                    <Text style={{ ...TextStyle.h3, ...style.title }}>Welcome back, Nabila Rahmadanti</Text>
                    {/* Table Navigation */}
                    <ScrollView horizontal={true} style={style.listAction}>
                        <TouchableOpacity onPress={() => setIndex('book')}>
                            <ImageBackground source={require('../../assets/images/Database/bg_blue.png')} style={style.action} imageStyle={{ borderRadius: 5 }}>
                                <Text style={{ ...TextStyle.h4, ...TextStyle.light, marginBottom: 5 }}>Book</Text>
                                <Text style={{ ...TextStyle.h5, ...TextStyle.light }}>Controls book's datas</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIndex('author')}>
                            <ImageBackground source={require('../../assets/images/Database/bg_cyan.png')} style={style.action} imageStyle={{ borderRadius: 5 }}>
                                <Text style={{ ...TextStyle.h4, ...TextStyle.light, marginBottom: 5 }}>Author</Text>
                                <Text style={{ ...TextStyle.h5, ...TextStyle.light }}>Controls author's datas</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIndex('genre')}>
                            <ImageBackground source={require('../../assets/images/Database/bg_orange.png')} style={style.action} imageStyle={{ borderRadius: 5 }}>
                                <Text style={{ ...TextStyle.h4, ...TextStyle.light, marginBottom: 5 }}>Genre</Text>
                                <Text style={{ ...TextStyle.h5, ...TextStyle.light }}>Controls genre's datas</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </ScrollView>

                    {/* Table View  */}
                    <View style={style.tableContainer}>
                        <View style={style.tableHeader}>
                            <Text style={{ ...TextStyle.h3, textTransform: 'capitalize' }}>{index}'s Datas</Text>
                            <Button title={`Add ${index}`} background='#845de7' color='#fff' />
                        </View>
                        <View>
                            <List book={book} author={author} genre={genre} index={index} />
                        </View>
                    </View>
                </>
                :
                <View></View>}
        </ScrollView>
    )
}

const mapStateToProps = state => ({
    book: state.book
});

export default connect(mapStateToProps)(Database);