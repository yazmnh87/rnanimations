import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

const Head = props => {
    const {navigation} = props
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{height: 50, width:'100%', backgroundColor:'blue'}}>
            <Icon name="ios-menu" style={{color: '#fff', fontSize:40}} onPress={()=> navigation.openDrawer()}/>
        </View>
        </SafeAreaView>
    )
}

export default Head;