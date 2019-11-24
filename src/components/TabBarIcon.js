import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-navigation';


const TabBarIcon = () => {

    return(
       
        <View style={{justifyContent:'flex-start'}}>
             <SafeAreaView>
            <TouchableOpacity style={{height: 50, width: '100%', borderColor: 'red', borderWidth: 1}}>
                <Icon name="ios-menu"/>
            </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default TabBarIcon;