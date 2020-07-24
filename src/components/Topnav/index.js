import React, { useState } from 'react';
import { Image, Modal, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Layout, TopNavigation } from '@ui-kitten/components';
import { smallButton as Button } from '../Button';
import { CloseIcon, MenuIcon } from '../Icons';
import { setLogout } from '../../redux/actions/auths';
import style from './style';

const TopNavigationCase = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const user = props.auths.isLogin;

    const renderLeftActions = () => (
        <Image
            source={require('../../assets/images/Home/logo.png')}
            style={style.icon}
        />
    );

    const renderRightActions = () => (
        <>
            {user ?
                <>
                    <TouchableHighlight>
                        <MenuIcon color='#fff' style={style.menuIcon} onPress={() => setModalVisible(true)} />
                    </TouchableHighlight>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={modalVisible}
                    >
                        <View style={style.modalContainer}>
                            <CloseIcon style={style.closeIcon} color='#fff' onPress={() => setModalVisible(false)} />
                            <View style={style.profile}>
                                <Image
                                    style={style.profileImg}
                                    source={require('../../assets/images/Home/profile.png')}
                                />
                                <Text style={{ color: '#fff', marginTop: 10, marginBottom: 5 }}>{user.fullname}</Text>
                                <Text style={{ color: '#b0b0b0', marginBottom: 10}}>{user.role}</Text>
                            </View>
                            <Button title='Logout' background='#cac592' color='#000' onPress={() => {setModalVisible(false); props.setLogout()}} />
                        </View>
                    </Modal>
                </> : <></>}
        </>
    );

    return (
        <Layout level='1'>
            <TopNavigation
                style={{ color: '#fff' }}
                alignment='center'
                accessoryLeft={renderLeftActions}
                accessoryRight={renderRightActions}
            />
        </Layout>
    );
};

const mapStateToProps = state => ({
    auths: state.auths,
});

const mapDispathToProps = { setLogout };

export default connect(mapStateToProps, mapDispathToProps)(TopNavigationCase);