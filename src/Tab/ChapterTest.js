import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet
} from 'react-native'

 export default class ChapterTest extends Component{
render(){
    return (
       < View style={styles.viewstyle}>
        <Text style={styles.textstyle}>ChapterTest</Text>
       </View>

    )
}
 }
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold'
}
 })
