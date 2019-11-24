import React, {useState} from 'react'
import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import { useScreens } from 'react-native-screens'
import { SafeAreaView } from 'react-navigation'


const Scale = () => {
    const { Value } = Animated
    const [scale] = useState(new Value(1))

    const animatedStyles = {
        transform: [{
            scale
        }]
    }

const startAnimation = () => {
    Animated.timing(scale,{
        toValue: 2,
        duration: 1500
    }).start(()=> Animated.timing(scale,{
        toValue: 1,
        duration: 1500
    }).start())
}
    return (
        <SafeAreaView style={{justifyContent:'center', alignItems:'center'}}>
            <TouchableWithoutFeedback onPress={()=> startAnimation()}>
            <Animated.View style={{...style.box, transform: [{
            scale: scale
        }]}}/>
        </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    box: {
        top: '20%',
        alignSelf:'center',
        height: 100,
        width: 100,
        backgroundColor: 'orchid'
    }
})

export default Scale;