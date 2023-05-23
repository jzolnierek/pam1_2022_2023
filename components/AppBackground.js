import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AppBackground = (props) => {
    return <LinearGradient
        colors={['#FCFF69', '#D9D9D9', 'transparent']}
        style={styles.background}
        start={{ x: 0.8, y: 0 }}
        end={{ x: 0, y: 1 }}
    >
        <KeyboardAwareScrollView>
            <View style={styles.container(props.topMargin)}>
                {props.children}
            </View>
        </KeyboardAwareScrollView>
    </LinearGradient>
}

export default AppBackground;

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: '#D9D9D9',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    container: (topMargin) => {return {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: topMargin,
    }},
})