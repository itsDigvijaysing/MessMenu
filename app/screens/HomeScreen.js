import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from "../config/colors"

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image
            resizeMode="contain" 
            style={styles.image} 
            source={require('../assets/cheese-commercial.jpg')} 
            />
        </View>
        
        );
    }

export default HomeScreen;

const styles = StyleSheet.create({
    closeIcon:{
        width: 30,
        height: 30,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 30,
        left: 30,
    },
    deleteIcon:{
        width: 30,
        height: 30,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 30,
        right: 30,
    },
    container:{
        backgroundColor: colors.black,
        flex: 1
    },
    image:{
        width:"100%",
        height:"100%",
    }
    
})