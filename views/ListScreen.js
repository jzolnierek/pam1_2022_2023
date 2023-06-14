import { Text, Modal, View, StyleSheet, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
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
import { FAB } from '@rneui/themed';
import InputField from '../components/InputField';
import BasicButton from '../components/BasicButton';
import { Input } from '@rneui/base'
import SearchableDropdown from 'react-native-searchable-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ListScreen = ({ navigation, route }) => {
    const [lists, setLists] = useState([]);
    const [products, setProducts] = useState([]);
    // const navigation = useNavigation();
    const [allProducts, setAllProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [editProduct, setEditProduct] = useState()

    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productAmount, setProductAmount] = useState('');
    const [productShop, setProductShop] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPriority, setProductPriority] = useState('');
    const [productComment, setProductComment] = useState('');

    const [listCost, setListCost] = useState(0)



    useEffect(() => {
        const listsQuery = query(ref(db, 'lists/'), orderByKey(), equalTo(route.params.lista[0]))

        const unsubscribe = onValue(listsQuery, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const listsArray = Object.entries(data);
                if (listsArray[0][1].products !== undefined) {
                    const listsArray2 = Object.entries(listsArray[0][1].products)

                    const listsArray3 = listsArray2.map((product) => { product[1].localId = product[0]; return product[1] })
    
                    setProducts(listsArray3)
                }
                
                setLists(listsArray);
            } else {
                setLists([]);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const productsQuery = query(ref(db, 'products/'))

        const unsubscribe = onValue(productsQuery, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const productsArray = Object.entries(data);
                setAllProducts(productsArray);
            } else {
                setAllProducts([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const productsNames = allProducts.map((product) => { product[1].id = product[0]; return product[1] });

    const addToList = () => {
        push(ref(db, 'lists/' + route.params.lista[0] + "/products"), {
            'name': productName,
            'price': productPrice,
            'amount': productAmount,
            'shop': productShop,
            'category': productCategory,
            'priority': productPriority,
            'id': productId,
            'done': false,
            'products': {}
        });
        setProductName('')
        setProductPrice('')
        setProductAmount('')
        setProductShop('')
        setProductCategory('')
        setProductPriority('')
        ToastAndroid.show('Product added to list.', ToastAndroid.SHORT);
    }

    const updateList = (id) => {
        const updates = {};
        updates['lists/' + route.params.lista[0] + "/products/" + id + "/name"] = productName;
        updates['lists/' + route.params.lista[0] + "/products/" + id + "/price"] = productPrice;
        updates['lists/' + route.params.lista[0] + "/products/" + id + "/amount"] = productAmount;
        updates['lists/' + route.params.lista[0] + "/products/" + id + "/shop"] = productShop;
        updates['lists/' + route.params.lista[0] + "/products/" + id + "/category"] = productCategory;
        updates['lists/' + route.params.lista[0] + "/products/" + id + "/priority"] = productPriority;
        update(ref(db), updates);
        ToastAndroid.show('Product updated.', ToastAndroid.SHORT);
        setProductName('')
        setProductPrice('')
        setProductAmount('')
        setProductShop('')
        setProductCategory('')
        setProductPriority('')
    }

    const calculateCost = () => {
        let bufor = 0
        if (products.length != 0)
            for (let product of products) {
                bufor += product.amount * product.price
            }
        setListCost(bufor.toFixed(2));
    }

    useEffect(() => {
        calculateCost();
    }, [products]);

    return (
        <AppBackground>
            <Logo2 />
            <Text>Total cost: {listCost}</Text>
            {/* Add product modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add product</Text>
                        <SearchableDropdown
                            onTextChange={(text) => console.log(text)}
                            onItemSelect={(item) => {
                                setProductId(item.id)
                                setProductName(item.name)
                                setProductCategory(item.category)
                                setProductPrice(item.price)
                                setProductShop(item.shop)
                            }}
                            containerStyle={{ padding: 5 }}
                            textInputStyle={{
                                padding: 12,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                backgroundColor: '#FAF7F6',
                            }}
                            itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#FAF9F8',
                                borderColor: '#bbb',
                                borderWidth: 1,
                            }}
                            itemTextStyle={{
                                color: '#222',
                            }}
                            itemsContainerStyle={{
                                maxHeight: '60%',
                            }}
                            items={productsNames}
                            defaultIndex={2}
                            placeholder="Wybierz produkt"
                            resetValue={false}
                            underlineColorAndroid="transparent"
                        />

                        <InputField
                            placeholder="Name"
                            value={productName}
                            onChangeText={text => setProductName(text)}
                        />
                        <InputField
                            placeholder="Price"
                            value={productPrice.toString()}
                            onChangeText={text => setProductPrice(text)}
                        />
                        <InputField
                            placeholder="Amount"
                            value={productAmount}
                            onChangeText={text => setProductAmount(text)}
                        />
                        <InputField
                            placeholder="Shop"
                            value={productShop}
                            onChangeText={text => setProductShop(text)}
                        />
                        <InputField
                            placeholder="Category"
                            value={productCategory}
                            onChangeText={text => setProductCategory(text)}
                        />
                        <InputField
                            placeholder="Priority"
                            value={productPriority}
                            onChangeText={text => setProductPriority(text)}
                        />

                        <BasicButton text='Add' onPress={() => {
                            addToList();
                            setModalVisible(!modalVisible);
                        }} />
                    </View>
                </View>
            </Modal>

            {/* Edit product modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Edit product</Text>

                        <InputField
                            placeholder="Name"
                            value={productName}
                            onChangeText={text => setProductName(text)}
                        />
                        <InputField
                            placeholder="Price"
                            value={productPrice.toString()}
                            onChangeText={text => setProductPrice(text)}
                        />
                        <InputField
                            placeholder="Amount"
                            value={productAmount}
                            onChangeText={text => setProductAmount(text)}
                        />
                        <InputField
                            placeholder="Shop"
                            value={productShop}
                            onChangeText={text => setProductShop(text)}
                        />
                        <InputField
                            placeholder="Category"
                            value={productCategory}
                            onChangeText={text => setProductCategory(text)}
                        />
                        <InputField
                            placeholder="Priority"
                            value={productPriority}
                            onChangeText={text => setProductPriority(text)}
                        />

                        <BasicButton text='Save' onPress={() => {
                            updateList(productId);
                            setModalVisible2(!modalVisible2);
                        }} />
                    </View>
                </View>
            </Modal>

            {products.length > 0 ? products.map((product) => (
                <TileLong name={product.name} price={product.price} shop={product.shop} amount={product.amount} variant={product.done ? 'tile2' : 'tile1'} longPress={() => {
                    const updates = {};
                    updates['lists/' + route.params.lista[0] + "/products/" + product.localId + "/done"] = true;
                    update(ref(db), updates);
                }} onClick={() => {
                    // setEditProduct(product)
                    setProductId(product.localId)
                    setProductName(product.name)
                    setProductPrice(product.price)
                    setProductAmount(product.amount)
                    setProductShop(product.shop)
                    setProductCategory(product.category)
                    setProductPriority(product.priority)
                    setModalVisible2(true)
                }} />
            )) : <></>}
            <FAB
                icon={{ name: 'add', color: 'white' }}
                color="green"
                onPress={() => setModalVisible(true)}
            />
        </AppBackground>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    modalView: {
        width: '80%',
        height: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        backgroundColor: "#3590264D",
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginTop: 10,
        borderRadius: 50,
        textAlign: 'center',
        fontFamily: 'serif',
        color: '#359026',
        fontSize: 20,
        width: '60%'
    },
});