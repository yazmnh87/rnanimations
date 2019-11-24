import React, {useState} from 'react'
import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { useScreens } from 'react-native-screens'



const Translate = () => {
    const {Value, timing} = Animated
const [translate] = useState(new Value(0))

const startAnimation = () => {
    Animated.timing(translate, {
        toValue: 300,
        duration: 1500
    }).start(()=> translate.setValue(0))
}

    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{flex: 1,justifyContent: "center", alignItems:'center'}}>
            <TouchableWithoutFeedback onPress={()=> startAnimation()}>
            <Animated.View style={{...style.box, transform: [{translateY: translate, }]}}/>
            </TouchableWithoutFeedback>
            </SafeAreaView>
        </View>
    )
}
const style = StyleSheet.create({
    box: {
        height: 200,
        width: 200,
        backgroundColor: 'crimson'

    }
})

export default Translate;