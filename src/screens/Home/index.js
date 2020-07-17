import React, { useState } from 'react';
import { ImageBackground, ScrollView, View, Text, TextInput } from 'react-native';
import { Button, Carousel, Product, TextStyle } from '../../components';
import style from './style';

const Home = () => {
  const [value, setChangeText] = useState('');

  const [carouselItems] = useState([
    {
      title: "Descendant of The Sun San Sin Sen Son",
      text: "Descendants of the Sun” is a 2016 South Korean drama series directed by Lee Eung Bok ...",
    },
    {
      title: "Descendant of The Sun",
      text: "Descendants of the Sun” is a 2016 South Korean drama series directed by Lee Eung Bok ...",
    },
    {
      title: "Descendant of The Sun",
      text: "Descendants of the Sun” is a 2016 South Korean drama series directed by Lee Eung Bok ...",
    },
    {
      title: "Descendant of The Sun",
      text: "Descendants of the Sun” is a 2016 South Korean drama series directed by Lee Eung Bok ...",
    },
    {
      title: "Descendant of The Sun",
      text: "Descendants of the Sun” is a 2016 South Korean drama series directed by Lee Eung Bok ...",
    },
  ]);


  return (
    <ScrollView>
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
              onChangeText={text => setChangeText(text)}
              value={value}
            />
          </View>
        </ImageBackground>
      </View>


      {/* Popular List Item */}
      <View style={{ ...style.listPopular, ...style.listContainer }}>
        <Text style={{ ...TextStyle.h3, ...TextStyle.bold, ...TextStyle.secondary }}>Top of the last week</Text>
        <Text style={{ ...TextStyle.default, ...TextStyle.light }}>The most desired books of the last week just for you</Text>
      </View>
      <Carousel data={carouselItems} />

      {/* List Item */}
      <View style={style.listContainer}>
        <View style={style.listAction}>
          <Button title='Sorts' background='#e7e7e9' color='#000' />
          <Button title='Filters' background='#e7e7e9' color='#000' />
        </View>
        <Product />
        <Button title='Load More' background='#e7e7e9' color='#000'/>
      </View>

    </ScrollView>
  );
};

export default Home;