import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const LogoAddProduct = () => {
    return <View>
        <Image style={styles.logo} source={require('../assets/addProduct.png')} />
    </View>

}

export default LogoAddProduct;

const styles = StyleSheet.create({
    logo: {
        marginTop: '25%',
    },
})