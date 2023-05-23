import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

const Tile = (props) => {
  return (
    <View style={styles[props.variant]}>
      <Text style={styles.text1}>{props.topText}</Text>
      <Text style={styles.text1}>{props.midText}</Text>
      <Text style={styles.text1}>{props.botText}</Text>
    </View>
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