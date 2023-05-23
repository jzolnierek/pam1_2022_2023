import React from 'react'
import { StyleSheet, Image, View, Text, FlatList } from 'react-native'
import Tile from '../components/Tile'

DATA = [1, 2, 3, 4]

const HorizontalScrollView = () => {
    return <View style={{flex: 1}}>
        <FlatList
            data={DATA}
            renderItem={({item}) => <Tile topText='111' midText='222' botText='333' variant='tile1' />}
            // keyExtractor={item => item.id}
            horizontal
        />
    </View>

}

export default HorizontalScrollView;

const styles = StyleSheet.create({
    
})