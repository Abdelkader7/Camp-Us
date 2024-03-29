import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form'

export default class ForgetPassword extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.imgBackground} source={require('../../assets/fond.png')}>
                <Logo />
                <Form />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Pas encorjjjjjjjjjjjje de compte? </Text>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: '#2B3B4B',
        fontSize: 16,
    },
    signupButton: {
        color: '#8CC7B1',
        fontWeight: '500',
        fontSize: 16,
    },
});