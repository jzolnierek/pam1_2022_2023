import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient'

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigation.replace("Login");
            })
            .catch(error => alert(error.message))
    }

    return (
        <LinearGradient
            colors={['#FCFF69', '#D9D9D9', 'transparent']}
            style={styles.background}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <View style={styles.container}>

                <Text>Email: {auth.currentUser?.email}</Text>
                <TouchableOpacity
                    onPress={handleLogout}
                >
                    <Text>Log out</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        color: '#D9D9D9',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    }
})