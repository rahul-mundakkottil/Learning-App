import React,{Component} from 'react'
import{
   View,
   Text,
   StyleSheet,
   Image,
   TouchableHighlight,TouchableOpacity



} from'react-native'
import  Icon from "react-native-vector-icons/MaterialCommunityIcons";
class Box extends Component{
    render(){
        return(
        <View>
            <View style={{height:54,width:210,backgroundColor:"#002233",marginLeft:30,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:2,flexDirection:"row"}}>
                <View  style={{height:30,width:30,backgroundColor:"#002233",marginLeft:0,
                                         borderRadius:6,borderWidth:1.5,alignItems:"center",justifyContent:'center',borderColor:"#1fb507",marginTop:0}}></View>    
                <Text style={{fontSize:14,fontWeight:"500",color:"white",marginLeft:20,marginTop:0}}>{this.props.content}</Text>
                 
            
            </View>
           
        </View>
        )
    }
} 
 export default class DrawerDesign extends Component{
    render(){
        return(
          <View style={{height:'100%', width:'100%',backgroundColor:"#002233",}} >
                 <TouchableOpacity style={{height:30,width:30,backgroundColor:"#002233",marginLeft:30,
                                         borderRadius:6,borderWidth:1,alignItems:"center",justifyContent:'center',borderColor:"white",marginTop:35}} onPress={()=> this.props.navigation.navigate('Home')}>
                                            <Icon name="close" size={18} color="#1ff507"style={{marginTop:0,marginLeft:0,marginRight:0}}/>
                 </TouchableOpacity>

                 <View style={{flexDirection:"row",backgroundColor:"#002233",height:80,width:230,marginLeft:30,marginTop:24,marginBottom:4}}>
                               <Image source={require('../../assets/icongirl.jpeg')} style={{height:55,width:55,marginLeft:0,marginTop:10,borderRadius:27.5,borderWidth:2,borderColor:"#1ff507"}}></Image>
                               <View style={{backgroundColor:"#002233",height:70,width:100,marginLeft:15}}>
                                   <Text style={{fontSize:15,fontWeight:"900",color:"white",marginLeft:0,marginTop:17}}>Aaron Tayler</Text> 
                                   <Text style={{fontSize:15,fontWeight:"600",color:"grey",marginLeft:0,marginTop:0}}>ID:12345678</Text>    
                               </View>
                               <Icon name="chevron-right" size={25} color="#1ff507"style={{marginTop:25,marginLeft:25,marginRight:0,marginBottom:0}}/>
                                
                 </View>
                            <Box content={"Exam corner"}></Box>
                            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:2,marginLeft:30,marginBottom:0}}></View> 
                            <Box content={"Subrscriptions"}></Box>
                            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:2,marginLeft:30}}></View> 
                            <Box content={"Analytics"}></Box>
                            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:2,marginLeft:30}}></View> 
                            <Box content={"Downloads"}></Box>
                            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:2,marginLeft:30}}></View> 
                            <Box content={"Notifications"}></Box>
                            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:2,marginLeft:30}}></View> 
                            <Box content={"Referrals"}></Box>
                            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:2,marginLeft:30}}></View> 
                            <Box content={"Share app"}></Box>
                            <View style={{height:1,width:210,backgroundColor:"#444444",marginTop:2,marginLeft:30}}></View> 
                           
                            <View>
            <View style={{height:54,width:210,backgroundColor:"#002233",marginLeft:30,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:2,flexDirection:"row"}}>
                <View  style={{height:30,width:30,backgroundColor:"#002233",marginLeft:0,
                                         borderRadius:6,borderWidth:1.5,alignItems:"center",justifyContent:'center',borderColor:"red",marginTop:0}}></View>    
                <Text style={{fontSize:14,fontWeight:"600",color:"red",marginLeft:20,marginTop:0}}>Logout</Text>
                 
            
            </View>
           
        </View>
                            <TouchableOpacity style={{height:49,width:"76%",backgroundColor:"#002233",marginLeft:30,
                                         borderRadius:6,borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:"#1fb507",flexDirection:"row",marginTop:19}}>
                                            
                                            <Text style={{ color:'#1fd507',fontSize:14, fontWeight:"500",marginLeft:0}}>Enquire now</Text>
                                            
                </TouchableOpacity>
          
          </View>
        )
    }
 }
 const Styles=StyleSheet.create({

    viewdesign:{
        height:"100%",
        width:"100%",
        backgroundColor:'white'
    },
    textdesign:{
        fontSize:14,
        color:'black',
        marginLeft:20,
        marginTop:0
        
    },
    topbox:{
      height:'30%',
      width:'100%',
      backgroundColor:'black',
      flexDirection:'column'

    }
    
 })
