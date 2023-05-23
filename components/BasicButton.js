import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const BasicButton = (props) => {
    return <TouchableOpacity
        onPress={props.onPress}
        style={styles.button}
    >
        <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
}

export default BasicButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "linear-gradient(90deg, rgba(53,144,38,1) 0%, rgba(53,144,38,0) 100%)",
        borderRadius: 50,
        alignItems: 'center',
        width: '60%',
        marginTop: 10,
    },
    buttonText: {
        fontFamily: 'Pacifico',
        fontSize: 20,
        color: 'white',
    },
})