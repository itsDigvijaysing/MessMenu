import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source ={require('../assets/clean-food-commercial.jpg')}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo} 
                    source={require('../assets/mess-menu.png')} 
                />
                <Text style={styles.heading}>
                    Let's Check today's Menu
                </Text>
            </View>
            <View style={styles.loginButton} ></View>
            <View style={styles.registerButton} ></View>
        </ImageBackground>
    );
}
 
export default WelcomeScreen;

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    heading:{
            color: colors.black,
            // fontSize:'100%',
            // textShadowRadius:10,
            // shadowColor:'#fff',
            fontWeight:'bold',
    },
    loginButton:{
        width: '100%',
        height: 65,
        backgroundColor: colors.primary,
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position: 'absolute',
        top:40,
        alignItems:'center',
    },
    registerButton:{
        width: '100%',
        height: 65,
        backgroundColor: colors.secondary,
    },
    
})