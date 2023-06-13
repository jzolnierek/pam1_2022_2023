import { Text, Image, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import AppBackground from '../components/AppBackground'
import ClickableTextField from '../components/ClickableTextField'
import Logo2 from '../components/Logo2'
import Tile from '../components/Tile'
import HorizontalScrollView from '../components/HorizontalScrollView'
import TileLong from '../components/TileLong'
import InputField from '../components/InputField'
import { db } from '../firebase.js';
import BasicButton from '../components/BasicButton'
import { ref, onValue, push, update, remove } from 'firebase/database';


const ProfileScreen = () => {

    const navigation = useNavigation();
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigation.replace("Login");
            })
            .catch(error => alert(error.message))
    }

    return (
        <AppBackground>
            <Text style={{marginTop: '40%'}}>Email: {auth.currentUser?.email}</Text>
            <ClickableTextField text='Log out' onPress={handleLogout} />

        </AppBackground>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({

});