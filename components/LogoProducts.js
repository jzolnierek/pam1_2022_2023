import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const LogoProducts = () => {
    return <View>
        <Image style={styles.logo} source={require('../assets/products.png')} />
    </View>

}

export default LogoProducts;

const styles = StyleSheet.create({
    logo: {
        marginTop: '10%',
    },
})