import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet,
     Image,ImageBackground,TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { TextInput } from 'react-native-gesture-handler';


 export default class ChapterVideo extends Component{
render(){
    return (
       < View style={{height:"100%",width:"100%",backgroundColor:"#002233"}}>

            <ImageBackground source={require('../assets/image.jpg')} style={{height:200,width:"100%",alignItems:"center",justifyContent:"center"}} >
                  <Icon name="play-circle-outline" size={100} color="white"style={{marginTop:0}}/>      
            </ImageBackground> 
           
            <View style={{flexDirection:"row",backgroundColor:"#002233",height:80}}>
                
              <View>
                     <Text style={{ color:'white',fontSize:19, fontWeight:"500",marginTop:14,marginLeft:30}}>Long chapter name can be</Text>
                     <Text style={{ color:'white',fontSize:19, fontWeight:"500",marginTop:0,marginLeft:30}}>here shown here</Text>
              </View>
              <View>
                  <Icon name="download" size={22} color="white"style={{marginTop:24,marginLeft:77,}}/>
                  <Text style={{ color:'white',fontSize:10, fontWeight:"400",marginTop:0,marginLeft:66}}>Download</Text>
              </View>
           </View> 
           <View style={{height:2,backgroundColor:"#003c51"}}></View>

            <View style={{flexDirection:"row",backgroundColor:"#002233",height:50}}> 
                     <TouchableOpacity style={{backgroundColor:"#002233",height:50,width:100}}> 
                          <View style={{flexDirection:"row"}}>
                             <Icon name="chevron-left" size={35} color="white"style={{marginTop:7,marginLeft:19}}/>
                             <Text style={{ color:'white',fontSize:10, fontWeight:"bold",marginTop:17}}>Previous</Text>
                         </View>
                     </TouchableOpacity>
                     <Icon name="radiobox-marked" size={20} color="#1ff507"style={{marginTop:13,marginLeft:79}}/>
                     <Text style={{ color:'#1ff507',fontSize:10, fontWeight:"bold",marginTop:17,marginLeft:5}}>part 1</Text>
                     <TouchableOpacity style={{backgroundColor:"#002233",height:50,width:100,marginLeft:50}}> 
                        <View style={{flexDirection:"row"}}>
                            
                             <Text style={{ color:'white',fontSize:10, fontWeight:"bold",marginTop:18,marginLeft:35}}>next</Text>
                             <Icon name="chevron-right" size={35} color="white"style={{marginTop:8,marginLeft:5}}/>
                        </View>
                     </TouchableOpacity>
              

           </View> 
           <View style={{height:2,backgroundColor:"#003c51",}}></View>


           <View style={{flexDirection:"row",backgroundColor:"black",height:65,width:"87%",marginTop:180,borderRadius:7,marginLeft:25}}>
                
                <View>
                       <Text style={{ color:'white',fontSize:13, fontWeight:"500",marginTop:14,marginLeft:15}}>Your sample question can be shown here</Text>
                       <Text style={{ color:'white',fontSize:13, fontWeight:"500",marginTop:0,marginLeft:15}}>no matter how long</Text>
                </View>
                <View>
                <Image source={require('../assets/icongirl.jpeg')} style={{height:40,width:40,marginLeft:15,marginTop:17,borderRadius:20}}></Image>
                </View>
             </View> 


             <View style={{flexDirection:"row",backgroundColor:"#002233",height:55,marginTop:13}}> 
             <TextInput style={{height:55,width:"64%",marginTop:0,borderTopLeftRadius:6,borderBottomLeftRadius:6,marginLeft:25,backgroundColor:"#003c51",paddingLeft:15}}
               placeholder="Ask a question" placeholderTextColor="white"></TextInput>
               <View style={{height:55,width:90,backgroundColor:"#003c51",borderBottomRightRadius:10,borderTopRightRadius:10,
                             marginTop:0,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity style={{height:40,width:70,backgroundColor:"white",alignItems:"center",
                                         justifyContent:"center",borderRadius:5}}>
                                            <Text style={{ color:'black',fontSize:14, fontWeight:"500",}}>Post</Text>
                </TouchableOpacity>
               </View>
            </View>

            <TouchableOpacity style={{height:55,width:"87%",backgroundColor:"#002233",marginLeft:25,
                                         borderRadius:6,borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:"#1ff507",flexDirection:"row",marginTop:13}}>
                                            <Icon name="whatsapp" size={25} color="#1ff507"style={{marginTop:0,marginLeft:0,marginRight:10}}/>
                                            <Text style={{ color:'#1ff507',fontSize:14, fontWeight:"500",}}>Chat with teacher</Text>
                </TouchableOpacity>

            
                

           

           </View>

        






       

    )
}
 }
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'blue',
    fontSize:20,
    fontWeight:'bold'
}
 })
