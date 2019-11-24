import React,{useState} from 'react';
import {SafeAreaView, TouchableWithoutFeedback, StyleSheet, Animated} from 'react-native';


const ViewHeightWidth = () => {
const {Value} = Animated;
const [animated] = useState(new Value(0))

const startAnimation = () => {
    Animated.timing(animated,{
        toValue: 1,
        duration: 1500
    }).start(()=> Animated.timing(animated,{
        toValue: 0,
        duration: 1500
    }).start())
}

const boxInterpolation = animated.interpolate({
    inputRange: [0,1],
    outputRange: [150, 300]
})

const boxAnimatedStyle = {
    width: boxInterpolation,
    height: boxInterpolation
}

    return (
<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableWithoutFeedback onPress={()=> startAnimation()}>
            <Animated.View style={{...styles.box, ...boxAnimatedStyle}}/>
        </TouchableWithoutFeedback>
</SafeAreaView>
    )

    }
const styles = StyleSheet.create({
    box:{
        height: 150,
        width: 150,
        backgroundColor: 'seagreen'
    }
})
export default ViewHeightWidth;