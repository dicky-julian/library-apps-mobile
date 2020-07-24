import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { Button, Product } from '../../components';
import { fetchTransaction } from '../../redux/actions/transaction';
import Empty from '../Empty';
import style from './style';

const Mybook = (props) => {
  const [btActive, setBtActive] = useState([['#272829', 'transparent'], ['#fff', '#000']]);
  const [status, setStatus] = useState(1);
  const [type, setType] = useState(1);
  const userId = props.auths.isLogin.id;
  const transaction = props.transaction;

  useEffect(() => {
    if (status) {
      setStatus(0);
      props.fetchTransaction(userId);
    }
  })

  const handleButton = (type) => {
    if (type) {
      setType(0);
      setBtActive([['transparent', '#272829'], ['#000', '#fff']]);
    } else {
      setType(1);
      setBtActive([['#272829', 'transparent'], ['#fff', '#000']]);
    }
  }

  let data = type ? transaction.borrow : transaction.return;

  return (
    <ScrollView style={style.container}>
      <View style={style.listAction}>
        <Button title='Borrowed' background={btActive[0][0]} color={btActive[1][0]} onPress={() => handleButton(0)} />
        <Button title='Returned' background={btActive[0][1]} color={btActive[1][1]} onPress={() => handleButton(1)} />
      </View>
      {data ? <Product data={data} /> : <Empty />}

    </ScrollView>
  );
}

const mapStateToProps = state => ({
  auths: state.auths,
  transaction: state.transaction
});

const mapDispathToProps = { fetchTransaction };

export default connect(mapStateToProps, mapDispathToProps)(Mybook);