import React from 'react';
import { Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { BackIcon, LogoutIcon, MenuIcon } from '../Icons';
import style from './style';

const TopNavigationCase = () => {
    const [menuVisible, setMenuVisible] = React.useState(false);


    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );

    const renderLeftActions = () => (
        <TopNavigationAction icon={BackIcon} />
    );
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderRightActions = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}
                style={style.modalMenu}>
                <MenuItem accessoryLeft={LogoutIcon} title='Logout'/>
            </OverflowMenu>
        </React.Fragment>
    );

    return (
        <Layout level='1'>
            <TopNavigation
                style={{ color: '#fff' }}
                alignment='center'
                title='Librarian'
                accessoryLeft={renderLeftActions}
                accessoryRight={renderRightActions}
            />
        </Layout>
    );
};



export default TopNavigationCase;