import { Text, Image, StyleSheet } from 'react-native'
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
import InputField from '../components/InputField'
import { db } from '../firebase.js';
import BasicButton from '../components/BasicButton'
import { ref, onValue, push, update, remove } from 'firebase/database';

const ProductScreen = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');


    const navigation = useNavigation();

    const addProduct = () => {
        push(ref(db, '/lists/idl1/products'), {
            // 'idp2': {
                'name': name,
                'price': price,
                'amount': amount
            // }
        });
    }

    return (
        <AppBackground>
            <TileLong name='abcd' shop='qwer' price='22,99' amount='5' variant='tile1' />
            <Image style={styles.productImage} source={require('../assets/icon.png')} />
            <InputField
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <InputField
                placeholder="Price"
                value={price}
                onChangeText={text => setPrice(text)}
            />
            <InputField
                placeholder="Amount"
                value={amount}
                onChangeText={text => setAmount(text)}
            />

            <BasicButton text='Add' onPress={addProduct} />

        </AppBackground>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    productImage: {
        maxWidth: '60%',
        maxHeight: '20%'
    }
});