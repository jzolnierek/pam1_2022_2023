import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import AppBackground from '../components/AppBackground'
import InputField from '../components/InputField'
import Logo from '../components/Logo'
import BasicButton from '../components/BasicButton'

const RegisterScreen = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("AppView");
            }
        })
        return unsubscribe;
    })

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
            })
            .catch(error => alert(error.message))
    }

    return (
        <AppBackground topMargin='20%'>
            <Logo />
            <InputField
                placeholder="Login"
                value={login}
                onChangeText={text => setLogin(text)}
            />
            <InputField
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <InputField
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <InputField
                placeholder="Confirm password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
            />

            <BasicButton text='Sign up' onPress={handleRegister} />

        </AppBackground>
    )
}

export default RegisterScreen;