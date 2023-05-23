import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const Logo2 = () => {
    return <View>
        <Image style={styles.logo} source={require('../assets/logo2.png')} />
    </View>

}

export default Logo2;

const styles = StyleSheet.create({
    logo: {
        marginTop: '10%',
    },
})