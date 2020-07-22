import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, ScrollView, View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Carousel, Product, TextStyle } from '../../components';
import style from './style';

import { fetchBook, fetchBookFilter } from '../../redux/actions/book';

const Home = (props) => {
  const [page, setPage] = useState(1);
  const [linePage, setLinePage] = useState(0);
  const [loading, setLoading] = useState(0);

  const book = props.book.book;
  const popularBook = props.book.bookPopular;
  const isOut = props.book.isOut;

  const navigation = useNavigation();

  const handleLoad = () => {
    setPage(page + 1);
    setLoading(1);
  }

  useEffect(() => {
    if (page !== linePage) {
      props.fetchBook(page);
      setLinePage(linePage + 1);
      setLoading(0);
    }
    if (!popularBook) props.fetchBookFilter([null, null, 'rating', 'DESC', 5]);
  });

  return (
    <ScrollView style={style.container}>
      {/* Header */}
      <View>
        <ImageBackground source={require('../../assets/images/Home/bg_header.png')} style={style.headerBg}>
          <View style={style.headerContainer}>
            <Text style={{ ...style.headerText, ...TextStyle.h1 }}>
              Find
              <Text style={TextStyle.bold}> perfect </Text>
              book for
              <Text style={TextStyle.bold}> today</Text>
            </Text>
            <TextInput
              placeholder='What book are you looking for ?'
              style={style.headerInput}
              onSubmitEditing={({ nativeEvent }) => navigation.navigate('Search', { title: nativeEvent.text })}
            />
          </View>
        </ImageBackground>
      </View>


      {/* Popular List Item */}
      <View style={{ ...style.listPopular, ...style.listContainer }}>
        <Text style={{ ...TextStyle.h3, ...TextStyle.bold, ...TextStyle.secondary }}>Top of the last week</Text>
        <Text style={{ ...TextStyle.h5, ...TextStyle.light }}>The most desired books of the last week just for you</Text>
      </View>
      {popularBook ? <Carousel data={popularBook} /> : <></>}


      {/* List Item */}
      <View style={style.listContainer}>
        <View style={style.listAction}>
          <Button title='Sorts' background='#e7e7e9' color='#000' />
          <Button title='Filters' background='#e7e7e9' color='#000' />
        </View>
        {book ? <Product data={book} /> : <></>}
        {isOut ? <></> : <Button title='Load More' background='#e7e7e9' color='#000' onPress={() => handleLoad() } loading={loading} />}
      </View>

    </ScrollView>
  );
};

const mapStateToProps = state => ({
  book: state.book
});

const mapDispathToProps = { fetchBook, fetchBookFilter };

export default connect(mapStateToProps, mapDispathToProps)(Home);