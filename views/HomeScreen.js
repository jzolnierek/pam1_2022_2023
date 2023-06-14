import { Text, StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import AppBackground from '../components/AppBackground'
import ClickableTextField from '../components/ClickableTextField'
import Logo2 from '../components/Logo2'
import Tile from '../components/Tile'
import HorizontalScrollView from '../components/HorizontalScrollView'
import TileLong from '../components/TileLong'
import { ref, onValue, push, update, remove, orderByChild, query, get, equalTo, orderByKey } from 'firebase/database';
import { db } from '../firebase.js';

const HomeScreen = () => {

    const navigation = useNavigation();
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const listsQuery = query(ref(db, 'lists/'), orderByChild('creator'), equalTo(auth.currentUser.email))

        const unsubscribe = onValue(listsQuery, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const listsArray = Object.entries(data);
                setLists(listsArray);
            } else {
                setLists([]);
            }
        });

        return () => unsubscribe();
    }, []);


    return (
        <AppBackground>
            <Logo2 />
            <View style={styles.container}><Text style={styles.recently}>Recently added</Text></View>
            <HorizontalScrollView data={lists} />



        </AppBackground>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    recently: {
        fontSize: 20,
        borderRadius: 20,
        backgroundColor: '#35902670',
        color: '#FFFFFF',
        padding: 10,
        marginRight: '52%',
        marginTop: '5%',
        left: 0,
    },

});