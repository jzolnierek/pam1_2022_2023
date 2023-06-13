import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput } from 'react-native'

const InputField = (props) => {
    return <TextInput
        placeholder={props.placeholder}
        placeholderTextColor='#359026'
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        multiline={props.secureTextEntry ? false : true}
        secureTextEntry={props.secureTextEntry}
    />
}

export default InputField;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#3590264D",
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginTop: 10,
        borderRadius: 50,
        textAlign: 'center',
        fontFamily: 'serif',
        color: '#359026',
        fontSize: 20,
        width: '60%'
    },
})