import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const LogoLists = () => {
    return <View>
        <Image style={styles.logo} source={require('../assets/lists.png')} />
    </View>

}

export default LogoLists;

const styles = StyleSheet.create({
    logo: {
        marginTop: '10%',
    },
})