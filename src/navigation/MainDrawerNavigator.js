import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import Head  from '../components/Head'
import OpacityAnimation from '../components/OpacityAnimation'
import TranslateAnimation from '../components/Translate'
import ScaleAnimation from '../components/Scale'
import InterpolateBackground from '../components/InterpolateBackground'
import RotateAnimation from '../components/Rotate'
import ViewHeightWidthAnimation from '../components/ViewHeightWidth';

const Opacity = createStackNavigator({
    OpacityScreen: {
        screen: OpacityAnimation,
        navigationOptions:  ({navigation}) => ({
            header: <Head navigation={navigation}/>
        })
    }
})

const Translate = createStackNavigator({
    TranslateScreen: {
        screen: TranslateAnimation,
        navigationOptions:  ({navigation}) => ({
            header: <Head navigation={navigation}/>
        })
    }
})

const Scale = createStackNavigator({
    ScaleScreen: {
        screen: ScaleAnimation,
        navigationOptions:  ({navigation}) => ({
            header: <Head navigation={navigation}/>
        })
    }
})

const Background = createStackNavigator({
    BackgroundScreen:{ 
        screen: InterpolateBackground,
    navigationOptions:  ({navigation}) => ({
        header: <Head navigation={navigation}/>
    })
}
})

const Rotate = createStackNavigator({
    RotateScreen: {
        screen: RotateAnimation,
        navigationOptions:  ({navigation}) => ({
            header: <Head navigation={navigation}/>
        })
    }
})

const ViewHeightWidth = createStackNavigator({
    ViewHeightWidthScreen: {
        screen: ViewHeightWidthAnimation,
        navigationOptions:  ({navigation}) => ({
            header: <Head navigation={navigation}/>
        })
    }
})

export default createDrawerNavigator({
    Opacity,
    Translate,
    Scale,
    Background,
    Rotate,
    ViewHeightWidth
    },{
    unmountInactiveRoutes: true,
    drawerType: 'slide',
    navigationOptions: {
        title: "",
        header: null
    },
})