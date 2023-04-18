import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient'


const LoginScreen = () => {
    // const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("Home");
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
        <LinearGradient
            colors={['#FCFF69', '#D9D9D9', 'transparent']}
            style={styles.background}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Image style={styles.img} source={require('../assets/logo.png')} />
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Login"
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
                    </View>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate("ForgotPassword") }}
                    >
                        <Text style={styles.clickableText}>Forgot password?</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            onPress={handleLogin}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Sign in</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate("Register") }}
                    >
                        <Text style={styles.clickableText}>Don't have an account? Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '20%',
    },
    background: {
        position: 'absolute',
        backgroundColor: '#D9D9D9',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    img: {
        // marginTop: '30%'
    },
    inputContainer: {
        width: '60%',
        marginTop: '40%'
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
        marginTop: 100,
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