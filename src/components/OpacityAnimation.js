import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-navigation";

const OpacityAnimation = () => {
  const [opacity] = useState(new Animated.Value(1));

  const startAnimation = () => {
    // console.log('running animation')
    // console.log(opacity)
    return () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500
      }).start(()=> {
        Animated.timing(opacity,{
            toValue: 1,
            duration: 500
        }).start()
      });
    };
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <SafeAreaView style={{flex:1}}>
        <TouchableWithoutFeedback style={{marginTop:50,flex:1,borderColor:'lime', borderWidth:3}} onPress={startAnimation()}>
          <Animated.View style={{...styles.box, opacity: opacity}} />
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default OpacityAnimation;

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: 150,
    backgroundColor: "tomato"
  }
});
