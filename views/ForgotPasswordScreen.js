import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import AppBackground from '../components/AppBackground'
import InputField from '../components/InputField'
import BasicButton from '../components/BasicButton'
import Logo from '../components/Logo'

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const navigation = useNavigation()

    const handleReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Check your email!");
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <AppBackground topMargin='20%'>
            <Logo />

            <Text style={styles.text}>Type your email:</Text>

            <InputField
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <BasicButton text='Reset password' onPress={handleReset} />

        </AppBackground>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    text: {
        marginTop: 5,
        fontFamily: 'Pacifico',
        color: '#7F9D7B',
    }
})