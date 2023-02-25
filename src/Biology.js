import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet,
     TouchableOpacity,ScrollView
} from 'react-native'
import  Icon from "react-native-vector-icons/MaterialIcons";
class Box extends Component{
    render(){
     return(
        <View style={styles.viewstyle4} >
        <Text style={styles.chaptername2} >long chapter name</Text>
        <Text style={styles.chaptername3} >long chapter name</Text>
      <View style={{height:40,width:300,backgroundColor:"white",flexDirection:"row",marginLeft:20,marginTop:7}}>
           <TouchableOpacity style={styles.buttonstyle1}  onPress={()=> this.props.navigation.navigate('Home')}> 
              <View style={{flexDirection:"row",}}>
                   <Icon name="radio-button-on" size={18} color="grey"style={styles.icon2}/>
                   <Text style={styles.buttontext}>Chapter1</Text>
         </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonstyle1}> 
         <View style={{flexDirection:"row"}}>
              <Icon name="radio-button-on" size={18} color="grey"style={styles.icon2}/>
              <Text style={styles.buttontext}>3 parts</Text>
         </View>
      </TouchableOpacity> 
     </View>  
</View>
        
    
     )
    }
    }



 export default class Aboutuspage extends Component{
render(){
    return (
       < View style={styles.mainview}>
            <ScrollView  style={styles.scrollviewstyle}>

                <View style={styles.topview}>
                    <View style={{height:35,width:35,backgroundColor:"#002233",borderRadius:5,borderColor:"white",borderWidth:1.5,
                                    alignItems:"center",justifyContent:"center",marginTop:40,marginLeft:30}}>
                    <Icon name="arrow-back-ios" size={16} color="#24fc03" style={{marginLeft:4}}/>  
                    </View>
                    <Text style={{fontSize:25,fontWeight:"600",color:"white",marginLeft:30,marginTop:47}}>Biology</Text>
                    <View style={{height:40,width:300,backgroundColor:"#002233",flexDirection:"row",marginLeft:20,marginTop:3}}>
                        
                            <View style={{flexDirection:"row",marginLeft:9}}>
                                 <Icon name="radio-button-on" size={18} color="#07e354"style={styles.icon2}/>
                                 <Text style={{ fontSize:11,
                                                color:'#07e354',
                                                fontWeight:'bold',
                                                marginTop:8,
                                                marginLeft:3}}  onPress={()=> this.props.navigation.navigate('Tab')}>12 Chapers</Text>

                                 <Icon name="radio-button-on" size={18} color="#07e354"style={{ marginTop:6,
                                                                                       marginLeft:10}}/>
                                 <Text style={{ fontSize:11,
                                                color:'#07e354',
                                                fontWeight:'bold',
                                                marginTop:8,
                                                marginLeft:3}}>124 hours</Text>
                            </View>
                        
                    </View>
                </View>


                <View style={{ height:35,width:'100%', backgroundColor:'#002233',}}>
                      <View style={{ height:20,width:'83%', backgroundColor:'white', 
                                      borderTopLeftRadius:6,borderTopRightRadius:6,marginLeft:33,marginTop:20}}>
                      </View>
                </View>
                
               <View style={{  height:100, width:'83%', backgroundColor:'white', marginLeft:33,
                              borderBottomLeftRadius:6, borderBottomRightRadius:6}}>
                      <Text style={styles.chaptername}>long chapter name</Text>
                      <Text style={styles.chaptername}>long chapter name</Text>
                    <View style={{height:40,width:300,backgroundColor:"white",flexDirection:"row",marginLeft:20,marginTop:7}}>
                         <TouchableOpacity style={styles.buttonstyle1}> 
                            <View style={{flexDirection:"row",}}>
                                 <Icon name="radio-button-on" size={18} color="grey"style={styles.icon2}/>
                                 <Text style={styles.buttontext}>Chapter1</Text>
                            </View>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.buttonstyle1}> 
                            <View style={{flexDirection:"row"}}>
                                 <Icon name="radio-button-on" size={18} color="grey"style={styles.icon2}/>
                                 <Text style={styles.buttontext}>3 parts</Text>
                            </View>
                         </TouchableOpacity> 
                    </View>
                </View>
               
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>

        
    
    
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
    marginTop:6,
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
