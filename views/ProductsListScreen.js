import { Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import AppBackground from '../components/AppBackground'
import ClickableTextField from '../components/ClickableTextField'
import Logo2 from '../components/Logo2'
import Tile from '../components/Tile'
import HorizontalScrollView from '../components/HorizontalScrollView'
import TileLong from '../components/TileLong'
import { ref, onValue, push, update, remove, orderByChild, query, get, equalTo } from 'firebase/database';
import { db } from '../firebase.js';

const ProductsListScreen = () => {

    const navigation = useNavigation();
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsQuery = query(ref(db, 'products/'))

        const unsubscribe = onValue(productsQuery, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const productsArray = Object.entries(data);
                setProducts(productsArray);
            } else {
                setProducts([]);
            }
        });
    
        return () => unsubscribe();
    }, []);

    return (
        <AppBackground>
            <Logo2 />
            {products.map((product) => (
                <TileLong name={product[1].name} price={product[1].price} variant='tile1' />
            ))}

        </AppBackground>
    )
}

export default ProductsListScreen