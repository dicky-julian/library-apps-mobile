import React from 'react';
import { ImageBackground, ScrollView, View, Text, TextInput } from 'react-native';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel/index';
import Product from '../../components/Product';
import textStyle from '../../components/Text';
import style from './style';

const Home = () => {
  const [value, setChangeText] = React.useState('');

  const [carouselItems] = React.useState([
    {
      title: "Descendant of The Sun Sun Sun",
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
    <ScrollView style={style.container}>
      {/* Header */}
      <View>
        <ImageBackground source={require('../../assets/images/bg_header.png')} style={style.headerBg}>
          <View style={style.headerContainer}>
            <Text style={{ ...style.headerText, ...textStyle.h1 }}>
              Find
              <Text style={textStyle.bold}> perfect </Text>
              book for
              <Text style={textStyle.bold}> today</Text>
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
        <Text style={{ ...textStyle.h3, ...textStyle.bold, ...textStyle.secondary }}>Top of the last week</Text>
        <Text style={{ ...textStyle.h4, ...textStyle.light }}>The most desired books of the last week</Text>
      </View>
      <Carousel data={carouselItems} />

      {/* List Item */}
      <View style={style.listContainer}>
        <View style={style.listAction}>
          <Button title='Sorts' background='#272829' color='#fff' />
          <Button title='Filters' background='#272829' color='#fff' />
        </View>
        <Product />
      </View>

    </ScrollView>
  );
};

export default Home;