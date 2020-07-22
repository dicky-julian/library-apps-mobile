import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { arrayFilter } from '../../utils/helpers';
import { Product, TextStyle } from '../../components';
import { BackIcon } from '../../components/Icons';
import { getBook } from '../../utils/apis/fetch';
import style from './style';

const Search = (props) => {
    const [data, setData] = useState(false);
    const title = props.route.params.title;
    // const data = arrayFilter(title, props.book.book);

    const fetchBook = () => {
        getBook(null, title).then(book => {
            if (book) setData(book.data);
        })
    }

    useEffect(() => {
        if (!data) {
            fetchBook();
        }
    })

    console.log(data)

    return (
        <>
            <ScrollView style={style.container}>
                <View style={style.listContainer}>
                    <Text style={{ ...TextStyle.h4, marginTop: 20, marginBottom: 20, textAlign: 'center' }}>Show result for '{title}'</Text>
                    <Product data={data} />
                </View>
            </ScrollView>
            <TouchableOpacity style={style.backIconWrapper} onPress={() => props.navigation.goBack()}>
                <BackIcon style={style.backIcon} color='#fff' />
            </TouchableOpacity>
        </>
    );
};

const mapStateToProps = state => ({
    book: state.book
});

export default connect(mapStateToProps)(Search);