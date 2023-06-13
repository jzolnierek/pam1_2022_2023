import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import AppBackground from '../components/AppBackground'
import InputField from '../components/InputField'
import Logo from '../components/Logo'
import ClickableTextField from '../components/ClickableTextField'
import BasicButton from '../components/BasicButton'
import AppView from './AppView'
import { ref, onValue, push, update, remove } from 'firebase/database'
import { db } from '../firebase.js';


const LoginScreen = () => {
    // const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                onValue(ref(db, '/products'), (snapshot) => {
                    const data = snapshot.val();
                    console.log(data)
                })
                navigation.replace("AppView");
            }
        })
        return unsubscribe;
    }, [])

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <AppBackground topMargin='20%'>
            <Logo />

            <InputField
                placeholder="Login"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <InputField
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />

            <ClickableTextField
                text="Forgot password?"
                onPress={() => { navigation.navigate("ForgotPassword") }}
            />

            <BasicButton text='Sign in' onPress={handleLogin} />

            <ClickableTextField
                text="Don't have an account? Sign up!"
                onPress={() => { navigation.navigate("Register") }}
            />

        </AppBackground>
    )
}

export default LoginScreen;