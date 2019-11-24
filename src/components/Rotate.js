import React, {useState} from 'react';
import {SafeAreaView, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';


const Rotate = () => {
const {Value} = Animated
const [animation] = useState(new Value(0))

const rotateInterpolation = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"]
})

const boxAnimationStyle = {
    transform: [{rotate: rotateInterpolation}]
}

const startAnimation = () => {
    
    if(animation._value === 0){
    Animated.timing(animation,{
        toValue: 360,
        duration: 1500
    }).start()
    } else if(animation._value === 360){
        Animated.timing(animation,{
            toValue: 0,
            duration: 1500
        }).start()
    }
}
    return (
        <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <TouchableWithoutFeedback onPress={()=> startAnimation()}>
            <Animated.View style={{...styles.box, ...boxAnimationStyle}}/>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box:{
        width: 150,
        height: 150,
        backgroundColor: 'orangered'
    }
})

export default Rotate;