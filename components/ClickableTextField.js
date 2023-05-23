import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const ClickableTextField = (props) => {
    return <TouchableOpacity
        onPress={props.onPress}
    >
        <Text style={styles.clickableText}>{props.text}</Text>
    </TouchableOpacity>
}

export default ClickableTextField;

const styles = StyleSheet.create({
    clickableText: {
        marginTop: 5,
        fontFamily: 'Pacifico',
        color: '#7F9D7B',
    }
});