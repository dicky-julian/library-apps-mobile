import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Layout, MenuItem, OverflowMenu, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { LogoutIcon, MenuIcon } from '../Icons';
import style from './style';

const TopNavigationCase = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [user, setUser] = useState({'name': 'Dicky Julian'});

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );

    const renderLeftActions = () => (
        <Image
        source={require('../../assets/images/Home/logo.png')}
        style={style.icon}
        />
    );

    const renderRightActions = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}
                style={style.modalMenu}>
                <View style={style.profile}>
                    <Image
                        style={style.profileImg}
                        source={require('../../assets/images/Home/profile.png')}
                    />
                    <MenuItem title={user.name} style={{width: 100}}/>
                </View>
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' style={{marginTop: -1}} />
            </OverflowMenu>
        </React.Fragment>
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



export default TopNavigationCase;