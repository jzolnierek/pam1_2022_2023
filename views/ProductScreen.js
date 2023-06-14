import { Text, Image, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import AppBackground from '../components/AppBackground'
import ClickableTextField from '../components/ClickableTextField'
import LogoAddProduct from '../components/LogoAddProduct'
import Tile from '../components/Tile'
import HorizontalScrollView from '../components/HorizontalScrollView'
import TileLong from '../components/TileLong'
import InputField from '../components/InputField'
import { db } from '../firebase.js';
import BasicButton from '../components/BasicButton'
import { ref, onValue, push, update, remove } from 'firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductScreen = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [shop, setShop] = useState('');
    const [category, setCategory] = useState('');


    const navigation = useNavigation();

    const addProduct = () => {
        push(ref(db, '/products'), {
            // 'idp2': {
            'name': name,
            'price': price,
            'shop': shop,
            'category': category,
            // }
        });
        setName('')
        setPrice('')
        setShop('')
        setCategory('')
        ToastAndroid.show('Product added.', ToastAndroid.SHORT);
    }

    return (
        <AppBackground>
            <LogoAddProduct />
            <Icon
                name="camera"
                size={80}
                color="#359026"
                style={styles.productImage}
            />
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
                placeholder="Shop"
                value={shop}
                onChangeText={text => setShop(text)}
            />
            <InputField
                placeholder="Category"
                value={category}
                onChangeText={text => setCategory(text)}
            />

            <BasicButton text='Add' onPress={addProduct} />

        </AppBackground>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    productImage: {
        maxWidth: '60%',
        maxHeight: '20%',
        marginTop: '5%'
    },
    text: {
        marginTop: '30%',
        fontFamily: 'serif',
        fontSize: 32,
        color: '#359026'
    }
});