import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, View, Dimensions} from 'react-native'
import Animated from 'react-native-reanimated'

const {width} = Dimensions.get('window')
const layouts = [
    {
        id: "column",
        name: 'Column',
        layout:{
            container:{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    },{
        id:'row',
        name:'Row',
        layout:{
            container:{
                flexDirection:'row',
                alignItems:'center'
            }
        }
    },{
        id:'wrap',
        name: 'Wrap',
        layout:{
            container:{
                flexDirection: 'row',
                flexWrap: 'wrap'
            },
            child:{
                flex: 0,
                width: width / 2 - 8 * 2
            }
        }
    }
]

const ReanimatedTransition = props => {
const [selectedLayout, setSelectedLayout] = useState(layouts[0].layout)
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex: 1, ...selectedLayout.container}}>
            <View style={{...styles.box, backgroundColor:'indigo'}}/>
            <View style={{...styles.box, backgroundColor:'turquoise'}}/>
            <View style={{...styles.box, backgroundColor:'slateblue'}}/>
            </View>
        </SafeAreaView>
    )
}
export default ReanimatedTransition;


const styles = StyleSheet.create({
    box:{
        height: 50,
        width: 50,
        borderRadius: 10
    }
})

