import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import { baseUrl } from '../../utils/apis/service';
import { Button, TextStyle } from '../../components';
import { BackIcon, BookIcon, TimeIcon, UserIcon } from '../../components/Icons';
import { fetchBorrow } from '../../redux/actions/transaction';
import style from './style';

const Book = (props) => {
  const id = props.route.params.id;
  const data = props.book.book.find(book => { return book.id == id });
  const author = props.book.author.find((author => { return author.id == data.id_author }));
  const genre = props.book.genre.find((genre => { return genre.id == data.id_genre }));

  const [status, setStatus] = useState(data.status);

  const url = `${baseUrl}/images/`;

  const handleBorrow = () => {
    setStatus(2);
    props.fetchBorrow(props.auths.isLogin.id, id);
  }

  return (
    <>
      <ScrollView style={style.container}>
        <Image
          style={style.bookHeader}
          source={{ uri: `${url}${data.image}` }}
          blurRadius={5} />

        <View style={style.productContainer}>
          <Image
            style={style.productImg}
            source={{ uri: `${url}${data.image}` }}
          />

          <View style={style.productDescription}>
            <Text style={{ ...TextStyle.h3, ...TextStyle.bold }}>{data.title}</Text>
            <Text style={{ ...style.description, ...TextStyle.h5 }}>{data.description}</Text>
          </View>

          <View style={style.productInfo}>
            <View style={style.info}>
              <Text style={{ ...TextStyle.h2, ...TextStyle.bold }}>{data.rating}</Text>
              <Text style={TextStyle.h5}>Ratings</Text>
            </View>
            <View style={{ ...style.info, borderLeftWidth: 1 }}>
              <Text style={{ ...TextStyle.h2, ...TextStyle.bold }}>120</Text>
              <Text style={TextStyle.h5}>Borrowed</Text>
            </View>
          </View>

          <View style={style.productDetail}>
            {/* Author */}
            <View style={style.detail}>
              <View style={style.detailTitle}>
                <UserIcon style={style.actionIcon} color='#000' />
                <Text style={{ ...TextStyle.h4, ...TextStyle.bold }}>Author</Text>
              </View>
              <Text style={TextStyle.h5}>{author.name}</Text>
            </View>
            {/* Genre */}
            <View style={style.detail}>
              <View style={style.detailTitle}>
                <BookIcon style={style.actionIcon} color='#000' />
                <Text style={{ ...TextStyle.h4, ...TextStyle.bold }}>Genre</Text>
              </View>
              <Text style={TextStyle.h5}>Romantic</Text>
            </View>
            {/* Release */}
            <View style={style.detail}>
              <View style={style.detailTitle}>
                <TimeIcon style={style.actionIcon} color='#000' />
                <Text style={{ ...TextStyle.h4, ...TextStyle.bold }}>{genre.name}</Text>
              </View>
              <Text style={{ ...TextStyle.h5, textTransform: 'capitalize' }}>{data.release_date}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={style.backIconWrapper} onPress={() => props.navigation.goBack()}>
        <BackIcon style={style.backIcon} color='#fff' />
      </TouchableOpacity>
      {props.auths.isLogin && !props.auths.isAdmin ?
        status === 1 ?
          <Button title='Borrow' background='#cac592' color='#000' style={style.btBorrow} textStyle={{ textTransform: 'uppercase' }} onPress={() => handleBorrow()} />
          :
          <Button title='Out of Stock' background='#cac592' color='#8a854b' style={style.btBorrow} textStyle={{ textTransform: 'uppercase' }} />
        : <></>
      }
    </>
  );
};

const mapStateToProps = state => ({
  auths: state.auths,
  book: state.book
});

const mapDispathToProps = { fetchBorrow };

export default connect(mapStateToProps, mapDispathToProps)(Book);