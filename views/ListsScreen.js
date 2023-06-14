import { Text, Modal, View, StyleSheet, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'
import AppBackground from '../components/AppBackground'
import ClickableTextField from '../components/ClickableTextField'
import LogoLists from '../components/LogoLists'
import Tile from '../components/Tile'
import HorizontalScrollView from '../components/HorizontalScrollView'
import TileLong from '../components/TileLong'
import { ref, onValue, push, update, remove, orderByChild, query, get, equalTo, route } from 'firebase/database';
import { db } from '../firebase.js';
import { FAB } from '@rneui/themed';
import InputField from '../components/InputField';
import BasicButton from '../components/BasicButton';
import { Input } from '@rneui/base'

const ListsScreen = () => {

    const navigation = useNavigation();
    const [lists, setLists] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newListName, setnewListName] = useState('');
    const [newListDate, setnewListDate] = useState('');

    const addNewList = () => {
        push(ref(db, 'lists/'), {
            'name': newListName,
            'creator': auth.currentUser.email,
            'date': newListDate,
            'done': false,
            'products': {}
        });
        ToastAndroid.show('List created.', ToastAndroid.SHORT);
    }

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
            <LogoLists />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>New list</Text>
                        <InputField
                            placeholder="Name"
                            value={newListName}
                            onChangeText={text => setnewListName(text)}
                        />
                        <InputField
                            placeholder="Date"
                            value={newListDate}
                            onChangeText={text => setnewListDate(text)}
                        />

                        <BasicButton text='Create' onPress={() => {
                            addNewList();
                            setModalVisible(!modalVisible);
                        }} />

                    </View>
                </View>
            </Modal>

            {lists.map((lista) => (
                <TileLong name={lista[1].name} price='Home' shop={lista[1].date} onClick={() => {navigation.navigate('ListScreen', { lista })} } variant={lista[1].done ? 'tile2' : 'tile1'} longPress={() => {
                    const updates = {};
                    updates['lists/' + lista[0] + "/done"] = true;
                    update(ref(db), updates);
                }}/>
            ))}
            <FAB
                icon={{ name: 'add', color: 'white' }}
                color="green"
                onPress={() => setModalVisible(true)}
            />
        </AppBackground>
    )
}

export default ListsScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    modalView: {
        width: '60%',
        height: '40%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
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
});