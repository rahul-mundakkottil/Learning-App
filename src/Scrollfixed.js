import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet,ScrollView
} from 'react-native'


 export default class Scrollfixed extends Component{
render(){
    return (
       < View style={styles.viewstyle}>
        <View style={{position:"absolute",height:"100%",width:"100%",backgroundColor:"transparent"}}>
            <View style={{width:"100%",height:100,backgroundColor:"black"}}></View>
        </View>
        <ScrollView  style={{backgroundColor:"white",width:"80%",position:"absolute",}}>
           
        </ScrollView>
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
