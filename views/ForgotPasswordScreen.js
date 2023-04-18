import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient'

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
        <LinearGradient
            colors={['#FCFF69', '#D9D9D9', 'transparent']}
            style={styles.background}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Text style={styles.clickableText}>Type your email:</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor='#359026'
                            style={styles.input}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />

                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            onPress={handleReset}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Reset password</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}

export default ForgotPasswordScreen

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