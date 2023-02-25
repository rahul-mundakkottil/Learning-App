import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet,
     TouchableOpacity,ScrollView, Settings,Image
} from 'react-native'
import  Icon from "react-native-vector-icons/MaterialCommunityIcons";

   class Box extends Component{
    render(){
        return(
          <View style={{marginBottom:14}}> 
               
               <View style={{flexDirection:"row"}}>
                    <View style={{width:140}}>
                        <Text style={{fontSize:13,fontWeight:"600",color:"grey",marginLeft:15,marginTop:14}}>{this.props.info}</Text>
                    </View>
                    <View style={{width:200}}>
                        <Text style={{fontSize:13,fontWeight:"900",color:"#686868",marginLeft:20,marginTop:14}}>{this.props.value}</Text>
                    </View>


              </View> 
          </View> 
        )
    }
   }



 export default class Aboutuspage extends Component{
render(){
    return (
       < View style={{height:'100%', width:'100%',backgroundColor:"#DEDEDE",}}>
           
         <ScrollView>
                <View style={{  height:100,width:'100%', backgroundColor:'#002233',flexDirection:"row"}}>
                    
                            <Text style={{fontSize:22,fontWeight:"400",color:"white",marginLeft:160,marginTop:40}}>Profile</Text>
                   
                            <Icon name="bell-outline" size={22} color="white"style={{ marginTop:47,marginLeft:75}}/>
                             <View style={{height:35,width:35,borderRadius:5,borderColor:"white",borderWidth:1,alignItems:'center',justifyContent:"center", marginTop:40, marginLeft:15}}>   
                            <Icon name="view-grid" size={14} color="#1ff507"style={{ marginTop:0, marginLeft:0}}/>
                            </View> 
                </View>


                <View style={{ height:172,width:'100%', backgroundColor:'#002233',marginLeft:0}}>
                      <View style={{ height:200,width:'89%', backgroundColor:'white', 
                                      borderTopLeftRadius:10,borderTopRightRadius:6,marginLeft:21,marginTop:0}}>
                            <View style={{flexDirection:"row",backgroundColor:"white",height:70,width:300,marginLeft:10}}>
                               <Image source={require('../../assets/icongirl.jpeg')} style={{height:40,width:40,marginLeft:5,marginTop:17,borderRadius:20,borderWidth:2,borderColor:"#1ff507"}}></Image>
                               <View style={{backgroundColor:"white",height:70,width:150,marginLeft:12}}>
                                   <Text style={{fontSize:15,fontWeight:"900",color:"#585858",marginLeft:0,marginTop:17}}>Jane Doe</Text> 
                                   <Text style={{fontSize:15,fontWeight:"600",color:"grey",marginLeft:0,marginTop:0}}>ID:12345678</Text>    
                               </View>
                                
                            </View>
                            <Text style={{fontSize:16,fontWeight:"800",color:"#585858",marginLeft:15,marginTop:15,marginBottom:20,fontStyle:"normal"}}>Personal info</Text>

                            <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:0,width:350,marginLeft:0}}></View> 
                            <Box info={"Account Settings"} value={"Aron Tayler"}></Box> 
                            <View style={{height:0.5,backgroundColor:"#DCDCDC",marginTop:0,width:330,marginLeft:12}}></View>  

                          <View style={{width:"100%",backgroundColor:"white",marginLeft:0}}>
                         
                            <Box info={"Email"} value={"emailskp@gmail.com"}></Box>
                            <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:0,width:330,marginLeft:12}}></View>
                   <Box info={"Number"} value={"+91 9876543210"}></Box>
                   <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:0,marginLeft:0}}></View> 
                   <Text style={{fontSize:16,fontWeight:"700",color:"#585858",marginLeft:15,marginTop:22,marginBottom:23}}>Course info</Text>
                   <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:0,width:330,marginLeft:12}}></View>
                   <Box info={"Center"} value={"Inmakes edu"}></Box>
                   <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:0,width:330,marginLeft:12}}></View>
                   <Box info={"Course"} value={"Plus Two Science"}></Box>
                   <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:0,width:330,marginLeft:12}}></View>
                   <Box info={"Payment Status"} value={"Free"}></Box>
                   <View style={{height:1,backgroundColor:"#DCDCDC",marginTop:0,width:330,marginLeft:12}}></View>
                   <Box info={"Expiry Date"} value={"Not Applicable"}></Box>
                   </View>
                      </View>
                </View>
                <View style={{width:"90%",backgroundColor:"blue",marginLeft:20}}>
                   

                </View>
                <TouchableOpacity style={{height:60,width:"91%",backgroundColor:"#1AE907",marginLeft:18,
                                         borderRadius:6,borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:"#1ff507",flexDirection:"row",marginTop:355}}>
                                            <View style={{backgroundColor:"#1Af907",height:35,width:35,borderRadius:5,marginLeft:15}}>
                                            <Icon name="credit-card-outline" size={22} color="white"style={{marginTop:6,marginLeft:6,marginRight:0}}/>
                                            </View>
                                            <Text style={{ color:'white',fontSize:14, fontWeight:"500",marginLeft:10}}>Custom Payment</Text>
                                            <Icon name="chevron-right" size={25} color="white"style={{marginTop:0,marginLeft:150,marginRight:10}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60,width:"91%",backgroundColor:"#1AE907",marginLeft:18,
                                         borderRadius:6,borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:"#1ff507",flexDirection:"row",marginTop:6}}>
                                            <View style={{backgroundColor:"#1Af907",height:35,width:35,borderRadius:5,marginLeft:15}}>
                                            <Icon name="credit-card-outline" size={22} color="white"style={{marginTop:6,marginLeft:6,marginRight:0}}/>
                                            </View>
                                            <Text style={{ color:'white',fontSize:14, fontWeight:"500",marginLeft:10}}>Custom Payment</Text>
                                            <Icon name="chevron-right" size={25} color="white"style={{marginTop:0,marginLeft:150,marginRight:10,marginBottom:20}}/>
                </TouchableOpacity>
               <View style={{height:70}}></View>

        
    
                </ScrollView>
       </View>

    )
}
 }
 const styles=StyleSheet.create({

mainview:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'red',
   
},
scrollviewstyle:{ 
   
    width:'100%',
    backgroundColor:'#e9ebf0',
   
    
   
   

},
topview:{ 
    height:200,
    width:'100%',
    backgroundColor:'#002233',
   
},
viewstyle4:{  height:120, width:'83%', backgroundColor:'white', marginLeft:33,marginTop:12,
borderRadius:6},
chaptername:{
    color:'#002233',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:25
},
chaptername2:{
    color:'#002233',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:25,marginTop:15
},
chaptername3:{
    color:'#002233',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:25
},
buttonstyle1:{
    height:30,
    width:95,
    marginLeft:0,
    marginTop:0,
    backgroundColor:'white',marginRight:0,
  
   },
   icon2:{
    marginTop:4,
    marginLeft:0
  
   },
   buttontext:{
    fontSize:11,
    color:'grey',
    fontWeight:'bold',
    marginTop:8,
    marginLeft:6
    
    
    
   },
 })
