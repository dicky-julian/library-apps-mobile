import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Alert, Button, TextStyle } from '../../components';
import { setLogin, setError, setLoading } from '../../redux/actions/auths';
import { fetchRegister } from '../../utils/apis/fetch';
import style from './style';

const Auth = (props) => {
    const [action, setAction] = useState('login');
    const [fullname, setFullname] = useState('');
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const isLoading = props.auths.isLoading;

    const inputValidation = () => {
        if (!uname) {
            props.setError({
                'title': 'Invalid input',
                'description': 'Username cant be empty'
            }); return true;
        }
        if (!pass) {
            props.setError({
                'title': 'Invalid input',
                'description': 'Password cant be empty'
            }); return true;
        }
    }

    const login = () => {
        const isError = inputValidation();
        if (isError) return;
        props.setLogin(uname, pass);
    }

    const signup = () => {
        if (!fullname) {
            props.setError({
                'title': 'Invalid input',
                'description': 'Fullname cant be empty'
            }); return
        }
        inputValidation();
        fetchRegister(fullname, uname, pass).then(res => {
            if (!res) {
                props.setError({
                    'title': 'Invalid Entry',
                    'description': 'Error on invalid or non-specific entries, please enter in more unique words.'
                }); return true;
            }
             Alert('Successfully Signed Up', 'please login to continue')
            
        })
    }

    useEffect(() => {
        const error = props.auths.isError;
        if (error) {
            Alert(error.title, error.description);
            props.setError(false);
        }
    })

    return (
        <ScrollView style={style.container}>
            {/* Header */}
            <Image
                style={style.header}
                source={require('../../assets/images/Auth/auth_header.png')}
            />
            <View style={style.form}>
                {/* Fullname */}
                {action === 'login' ? <></> :
                    <View>
                        <Text style={{ ...TextStyle.fade, ...TextStyle.h5, marginBottom: 10 }}>Fullname</Text>
                        <TextInput
                            placeholder='It will be seen on your profile'
                            placeholderTextColor='#7c7979'
                            style={style.input}
                            onChangeText={text => setFullname(text)}
                            value={fullname}
                        />
                    </View>
                }
                {/* Username */}
                <View>
                    <Text style={{ ...TextStyle.fade, ...TextStyle.h5, marginBottom: 10 }}>Username</Text>
                    <TextInput
                        placeholder='Insert your username'
                        placeholderTextColor='#7c7979'
                        style={style.input}
                        onChangeText={text => setUname(text)}
                        value={uname}
                    />
                </View>
                {/* Password */}
                <View>
                    <Text style={{ ...TextStyle.fade, ...TextStyle.h5, marginBottom: 10 }}>Password</Text>
                    <TextInput
                        placeholder='Insert your password'
                        placeholderTextColor='#7c7979'
                        style={style.input}
                        onChangeText={text => setPass(text)}
                        value={pass}
                        secureTextEntry={true}
                    />
                </View>
                {action === 'login' ?
                    <>
                        <Button title={action} background='#cac592' color='#000' style={style.button} textStyle={{ textTransform: 'uppercase' }} onPress={() => login()} loading={isLoading} />
                        <Text style={{ ...TextStyle.fade, ...TextStyle.h5 }} onPress={() => setAction('signup')}>Have no account ? Sign Up</Text>
                    </>
                    :
                    <>
                        <Button title={action} background='#cac592' color='#000' style={style.button} textStyle={{ textTransform: 'uppercase' }} onPress={() => signup()} loading={isLoading} />
                        <Text style={{ ...TextStyle.fade, ...TextStyle.h5 }} onPress={() => setAction('login')}>Already have an account ? Sign In</Text>
                    </>
                }
            </View>
        </ScrollView>
    )
}

const mapStateToProps = state => ({
    auths: state.auths
});

const mapDispathToProps = { setLogin, setError, setLoading };

export default connect(mapStateToProps, mapDispathToProps)(Auth);