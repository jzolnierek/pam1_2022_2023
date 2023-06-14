import React from 'react'
import { StyleSheet, Image, View, Text, FlatList } from 'react-native'
import Tile from '../components/Tile'
import { useNavigation } from '@react-navigation/core'

const HorizontalScrollView = (props) => {
    const navigation = useNavigation();

    return <View style={{flex: 1, margin: 15}}>
        <FlatList
            data={props.data}
            renderItem={({item}) => <Tile topText={item[1].name} midText={item[1].date} botText={item[1].done ? 'Done' : 'In progress'} variant='tile1' onClick={() => console.log(item)} />} //navigation.navigate('ListScreen', { item })
            // keyExtractor={item => item.id}
            horizontal
        />
    </View>

}

export default HorizontalScrollView;

const styles = StyleSheet.create({
    
})