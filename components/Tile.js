import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from "react-native"

const Tile = (props) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles[props.variant]}>
        <Text style={styles.text1}>{props.topText}</Text>
        <Text style={styles.text1}>{props.midText}</Text>
        <Text style={styles.text1}>{props.botText}</Text>
    </TouchableOpacity>
  )
}

export default Tile

const styles = StyleSheet.create({
    tile1: {
        backgroundColor: '#35902670',
        width: 140,
        height: 90,
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    text1: {
        marginTop: 6,
        marginLeft: 10,
        marginRight: 10,
        color: '#FFFFFF',
        fontWeight: 600,
    },
});