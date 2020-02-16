import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native'
import {CheckIcon, CHECK_ICON_SIZE} from './CheckIcon'
import {RectButton} from 'react-native-gesture-handler'

export const Box = props => {
    return (
        <View {...props}/>

    )
}

export const Selection = ({name, isSelected, onPress}) => {
    return (
        <SafeAreaView >
            <RectButton {...{onPress}}/>
            <View style={styles.button}>
            <Text>{name}</Text>
            {isSelected && <CheckIcon />}
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        borderColor: 'red',
        borderWidth: 1
        // borderBottomWidth: 1,
        // borderColor: "#f4f6f3"
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height: 8 * 2 + CHECK_ICON_SIZE,
        padding: 8
    }
})
