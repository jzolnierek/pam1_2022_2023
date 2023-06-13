import { Text } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import AppBackground from '../components/AppBackground'
import ClickableTextField from '../components/ClickableTextField'
import Logo2 from '../components/Logo2'
import Tile from '../components/Tile'
import HorizontalScrollView from '../components/HorizontalScrollView'
import TileLong from '../components/TileLong'

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigation.replace("Login");
            })
            .catch(error => alert(error.message))
    }

    return (
        <AppBackground>
            <Logo2 />
            {/* <Tile topText='List name' midText='Home' botText='01-01-0000' variant='tile1' /> */}
            <HorizontalScrollView />
            <TileLong name='List name' price='Home' shop='01-01-0000' variant='tile1' />

            {/* <Text style={{marginTop: '40%'}}>Email: {auth.currentUser?.email}</Text> */}
            {/* <ClickableTextField text='Log out' onPress={handleLogout} /> */}

        </AppBackground>
    )
}

export default HomeScreen