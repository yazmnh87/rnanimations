import React from 'react';
import {View, StyleSheet} from 'react-native'

export const Box = props => {
    return (
        <View style={[...styles.box, {backgroundColor:'indigo'}]}/>

    )
}

export const Box1 = props => {
    return (
        <View style={[...styles.box, {backgroundColor:'turquoise'}]}/>

    )
}

export const Box2 = props => {
    return (
        <View style={[...styles.box, {backgroundColor:'slateblue'}]}/>

    )
}

const styles = StyleSheet.create({
    box:{
        height: 50,
        width: 50,
        borderRadius: 10
    }
})