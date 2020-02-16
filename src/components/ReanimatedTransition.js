import React,{useState, useRef, useEffect} from 'react'
import { SafeAreaView, StyleSheet, View, Dimensions} from 'react-native'
import {Box, Selection} from '../common/Boxes'
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

const boxes = ['magenta', 'rebeccapurple', 'skyblue']

const ReanimatedTransition = props => {
const ref = useRef(null)
const [selectedLayout, setSelectedLayout] = useState(layouts[0].layout)

useEffect(()=>{
    console.log("selected", selectedLayout)
},[selectedLayout])

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex: 1, ...selectedLayout.container}}>
            {boxes.map((box,i)=>{
                return <View key={i} style={{...styles.box, ...selectedLayout.child, backgroundColor: box}}/>
            })
            }
            </View>
            {
                layouts.map(layout=>{
                    return(
                        <Selection key={layout.id} name={layout.name} isSelected={selectedLayout === layout} onPress={()=>{setSelectedLayout(layout)}}/>
                    )
                })
            }
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

