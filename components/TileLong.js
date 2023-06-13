import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from "react-native"

const TileLong = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick} style={styles[props.variant]} onLongPress={props.longPress} delayLongPress={1000}>
            <View style={styles.left}>
                <Text style={[styles.text, styles.textTop1, styles.textLeft1]}>{props.name}</Text>
                <Text style={[styles.text, styles.textBot1, styles.textLeft1]}>{props.shop}</Text>
            </View>
            <View style={styles.right}>
                <Text style={[styles.text, styles.textTop1, styles.textRight1]}>{props.price}</Text>
                <Text style={[styles.text, styles.textBot1, styles.textRight1]}>{props.amount}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TileLong

const styles = StyleSheet.create({
    tile1: {
        backgroundColor: '#35902670',
        width: '90%',
        height: 90,
        borderRadius: 20,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    tile2: {
        backgroundColor: '#79000099',
        width: '90%',
        height: 90,
        borderRadius: 20,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    left: {
        position: 'absolute',
        left: 0,
        marginLeft: 10,
    },
    right: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
        textAlign: 'right',
    },
    text: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        color: '#FFFFFF',
    },
    textTop1: {
        fontWeight: '600',
        fontSize: 22,
    },
    textBot1: {
        fontWeight: '400',
        fontSize: 14,
    },
    textRight1: {
        textAlign: 'right',
    },
    textLeft1: {
    },
});