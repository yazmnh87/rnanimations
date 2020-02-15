import React, {useState} from 'react';
import {SafeAreaView, TouchableWithoutFeedback, View, StyleSheet} from 'react-native'
import Animated from 'react-native-reanimated';
import {useMemoOne} from 'use-memo-one'

const {Value, useCode, set, Clock, block, cond, not, startClock, clockRunning, stopClock, interpolate, add, Extrapolate, eq} = Animated
const duration = 2000;
const ReanimatedExample = props => {
    const [show, setShow] = useState(true)
    const { time, clock, progress} = useMemoOne(()=>({
    time: new Value(0),
    clock: new Clock(),
    progress: new Value(0)
    }),[])
    const opacity = interpolate(progress,{
        inputRange: [0,1],
        outputRange: show ? [0,1] : [1,0],
        extrapolate: Extrapolate.CLAMP
    })
    useCode(block([
        cond(not(clockRunning(clock)),
        [startClock(clock), set(time, clock)]),
        set(progress, interpolate(clock,{
            inputRange: [time, add(time, duration)],
            outputRange: [0, 1],
            extrapolate: Extrapolate.CLAMP
        })),
        cond(eq(progress, 1), stopClock(clock))
    ]),[])
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableWithoutFeedback onPress={()=> setShow(prev => !prev)}>
            <Animated.View style={{...styles.box, opacity}}/>
        </TouchableWithoutFeedback>
</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box:{
        height: 150,
        width: 150,
        backgroundColor: 'fuchsia'
    }
})

export default ReanimatedExample;