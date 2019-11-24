import React, {useState} from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Animated, StyleSheet} from 'react-native';


const InterpolateBackground = () => {
    const {Value} = Animated;
    const [animation] = useState(new Value(0))

    const startAnimation = () => {
        Animated.timing(animation,{
            toValue: 1,
            duration: 1500
        }).start(()=> Animated.timing(animation,{
            toValue: 0,
            duration: 1500
        }).start())
    }

const boxInterpolation = animation.interpolate({
    inputRange: [0,1],
    outputRange: ['plum', 'powderblue']
})

const boxAnimatedStyle = {
    backgroundColor: boxInterpolation
}
console.log(boxAnimatedStyle)
    return (
        
        <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <TouchableWithoutFeedback onPress={()=> startAnimation()}>
                <Animated.View style={{...styles.box, ...boxAnimatedStyle}}/>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box:{
        borderColor: 'black',
        borderWidth: 1,
        width: 150,
        height: 150
    }
})

export default InterpolateBackground;