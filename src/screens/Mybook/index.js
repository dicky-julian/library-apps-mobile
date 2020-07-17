import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Product } from '../../components';
import style from './style';

const Mybook = () => {
  const [btActive, setBtActive] = useState([['#272829', 'transparent'], ['#fff', '#000']]);
  const handleButton = (type) => {
    if (type) {
      setBtActive([['transparent', '#272829'], ['#000', '#fff']]);
    } else {
      setBtActive([['#272829', 'transparent'], ['#fff', '#000']]);
    }
  }

  return (
    <ScrollView style={style.container}>
      <View style={style.listAction}>
        <Button title='Borrowed' background={btActive[0][0]} color={btActive[1][0]} onPress={() => handleButton(0) } />
        <Button title='Returned' background={btActive[0][1]} color={btActive[1][1]} onPress={() => handleButton(1) } />
      </View>

      <Product />
    </ScrollView>
  );
}

export default Mybook;