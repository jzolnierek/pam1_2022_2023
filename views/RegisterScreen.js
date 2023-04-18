import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient'

const RegisterScreen = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("Home");
            }
        })
        return unsubscribe;
    })

    const handleRegister = () => {
        console.log(email);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <LinearGradient
            colors={['#FCFF69', '#D9D9D9', 'transparent']}
            style={styles.background}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Login"
                            placeholderTextColor='#359026'
                            style={styles.input}
                            value={login}
                            onChangeText={text => setLogin(text)}
                        />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor='#359026'
                            style={styles.input}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='#359026'
                            style={styles.input}
                            secureTextEntry
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                        <TextInput
                            placeholder="Confirm password"
                            placeholderTextColor='#359026'
                            style={styles.input}
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}
                        />

                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            onPress={handleRegister}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '65%',
    },
    background: {
        position: 'absolute',
        color: '#D9D9D9',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    inputContainer: {
        width: '60%',
    },
    input: {
        backgroundColor: "#3590264D",
        paddingVertical: 5,
        marginTop: 10,
        borderRadius: 50,
        textAlign: 'center',
        fontFamily: 'Pacifico',
        color: '#359026',
        fontSize: 20,
    },
    buttonsContainer: {
        marginTop: 70,
        width: '60%',
    },
    button: {
        backgroundColor: "linear-gradient(90deg, rgba(53,144,38,1) 0%, rgba(53,144,38,0) 100%)",
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Pacifico',
        fontSize: 20,
        color: 'white',
    },
    clickableText: {
        marginTop: 5,
        fontFamily: 'Pacifico',
        color: '#7F9D7B',
    }
})