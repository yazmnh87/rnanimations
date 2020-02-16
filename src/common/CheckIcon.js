import React from 'react';
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const CHECK_ICON_SIZE = 35;
const styles = StyleSheet.create({
    container:{
        width: CHECK_ICON_SIZE,
        height: CHECK_ICON_SIZE,
        borderRadius: CHECK_ICON_SIZE /2,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor: "#fff",
        borderColor:'lime',
        borderWidth: 1
    }
})

export const CheckIcon = props => {
    return (
        <View style={styles.container}>
            <Icon name="checkmark-outline" size={24} backgroundColor="#BAF535"/>
        </View>
    )
}