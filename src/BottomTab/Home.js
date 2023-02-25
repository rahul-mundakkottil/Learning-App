import React,{Component} from 'react'
//import Picker from 'react-native-picker-select';
import {
     View,
     Text,
     StyleSheet,
     ScrollView,
     Image,
     TouchableHighlight,
     TextInput,
     ImageBackground,TouchableOpacity
} from 'react-native'
import { Button } from 'react-native-paper';
import  Icon from "react-native-vector-icons/Ionicons";
import { SelectList } from 'react-native-dropdown-select-list'
import { color } from 'react-native-reanimated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


 export default class Home extends Component{
   constructor(){
      super();
      this.state={selected:null}
  }
 
render(){
   
    return (
      <View style={{backgroundColor:"white"}}>
       < View style={styles.viewstyle}>
        <ScrollView style={{width:"100%", backgroundColor:"white"}}>
           <View  style={{flexDirection:"row",marginLeft:0,height:"8%",backgroundColor:"white",marginTop:30}}>

           <View style={{height:35,width:35,backgroundColor:"white",marginLeft:0,
                                         borderRadius:5,borderWidth:1,alignItems:"center",justifyContent:'center',borderColor:"grey",marginTop:5,marginLeft:0}}>
           <Icon name="grid" size={14} color="#00cc00"style={styles.icon1}/>
           </View>
                 <Image source={require('../../assets/inmakes.jpeg')} style={styles.bgimagestyle1}></Image>
                 
                 <TouchableOpacity style={styles.buttonstyle1} onPress={()=> this.props.navigation.navigate('Drower')}> 
                     <View style={{flexDirection:"row"}}>
                            <Icon name="ios-ellipse" size={18} color="green"style={styles.icon2}/>
                            <Text style={styles.buttontext1}>Classes</Text>
                    </View>
                 </TouchableOpacity>
           </View>
         
                 <Text style={{ color:'black',fontSize:15, fontWeight:"500",marginTop:12}}>Goodmorning</Text>
                 <Text style={{ color:'black',fontSize:25, fontWeight:"500",marginTop:4}}>name</Text>

           <View style={{backgroundColor:"#002233",marginRight:30,width:"85%", borderRadius:8,
                       borderWidth:0,marginTop:30}}>
                 <Text style={{ color:'white',fontSize:15, fontWeight:"500",marginTop:10,marginLeft:20}}>Class</Text>
                
                 <SelectList 
        setSelected={(val) => this.setState({selected:val})} //https://www.npmjs.com/package/react-native-dropdown-select-list
        data={[
         {key:'1', value:'Plus two science',},
         {key:'2', value:'Appliances'},
         {key:'3', value:'Cameras'},
         {key:'4', value:'Computers', },
         {key:'5', value:'Vegetables'},
         {key:'6', value:'Diary Products'},
         {key:'7', value:'Drinks'},
     ]} 
        save="value"
        boxStyles={{borderRadius:50,backgroundColor:"#002233",width:'90%',borderWidth:0,fontSize:30}} 
        defaultOption={{ key:'1', value:'select state' }} 
        fontFamily='lato'
      search={false} 
inputStyles={{fontSize:18,color:"white",}}
dropdownStyles={{backgroundColor:"grey"}}
//dropdownItemStyles={{margin:5}}
//dropdownTextStyles={{fontSize:"15",color:"white"}}
//maxHeight={100}
//placeholder="select state"



    /> 
           </View>
           
   

        


           <View >
                 <ScrollView style={{backgroundColor:"white"}} horizontal={true}>
                   <View style={{flexDirection:"row",marginTop:20,marginBottom:20}}> 
                   <TouchableOpacity style={styles.buttonstyle2} onPress={()=> this.props.navigation.navigate('Biology')}> 
                     <View style={{flexDirection:"row"}}>
                            <Icon name="ios-ellipse" size={25} color="#00cc00"style={styles.icon3}/>
                            <Text style={styles.buttontext2}>Biology</Text>
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.buttonstyle2}> 
                     <View style={{flexDirection:"row"}}>
                            <Icon name="ios-ellipse" size={25} color="#00cc00"style={styles.icon3}/>
                            <Text style={styles.buttontext2}>Physics</Text>
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={{height:50, width:120,marginTop:0,backgroundColor:'white',alignItems:'center',
                                            borderRadius:14,
                                            borderWidth:2,marginRight:4, }}> 
                     <View style={{flexDirection:"row"}}>
                            <Icon name="ios-ellipse" size={25} color="#00cc00"style={styles.icon3}/>
                            <Text style={styles.buttontext2}>Chemistry</Text>
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.buttonstyle2}> 
                     <View style={{flexDirection:"row"}}>
                            <Icon name="ios-ellipse" size={25} color="#00cc00"style={styles.icon3}/>
                            <Text style={styles.buttontext2}>Maths</Text>
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.buttonstyle1}> 
                     <View style={{flexDirection:"row"}}>
                            <Icon name="ios-ellipse" size={25} color="#00cc00"style={styles.icon3}/>
                            <Text style={styles.buttontext2}>Social</Text>
                    </View>
                 </TouchableOpacity>
                
                 </View>
                 </ScrollView>
           </View>


           <Text style={{ color:'black',fontSize:15, fontWeight:"500",marginTop:10, marginBottom:0}}>Recent courses</Text>



           
            <ScrollView style={{backgroundColor:"white"}} horizontal={true}>
              <View style={{flexDirection:"row",height:145,alignItems:"center"}}>
                
                         <ImageBackground source={require('../../assets/image.jpg')} style={styles.bgimagestyle2}  imageStyle={{ borderRadius:8}}>
                           <View style={{flexDirection:"row"}}>
                              <Icon name="play-circle-outline" size={20} color="white" style={{ marginTop:100, marginLeft:20}}/>
                              <Text style={{ marginTop:100, marginLeft:20,fontSize:15,fontWeight:"500",color:"white"}}>course title</Text>
                           </View>
                        </ImageBackground>

                        <ImageBackground source={require('../../assets/image.jpg')} style={styles.bgimagestyle2}  imageStyle={{ borderRadius:8}}>
                           <View style={{flexDirection:"row"}}>
                              <Icon name="play-circle-outline" size={20} color="white" style={{ marginTop:100, marginLeft:20}}/>
                              <Text style={{ marginTop:100, marginLeft:20,fontSize:15,fontWeight:"500",color:"white"}}>course title</Text>
                           </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../assets/image.jpg')} style={styles.bgimagestyle2}  imageStyle={{ borderRadius:8}}>
                           <View style={{flexDirection:"row"}}>
                              <Icon name="play-circle-outline" size={20} color="white" style={{ marginTop:100, marginLeft:20}}/>
                              <Text style={{ marginTop:100, marginLeft:20,fontSize:15,fontWeight:"500",color:"white"}}>course title</Text>
                           </View>
                        </ImageBackground>
              
           
            </View>
            </ScrollView>
           

            <ScrollView style={{backgroundColor:"white"}} horizontal={true}>
              <View style={{flexDirection:"row",marginTop:30,}}>

                <View style={{backgroundColor:"#002233",height:390,width:230,marginRight:15,borderRadius:10}}>
                    <View style={{backgroundColor:"#00334d",height:80,width:80,borderRadius:50,marginTop:40,marginLeft:30,marginBottom:18}}></View>
                    <Text style={{ color:'white',fontSize:17,
                     fontWeight:"500",marginLeft:30}}>Target live classes</Text>

                    <Text style={{ color:'#00535d',fontSize:14,fontWeight:"400",marginLeft:30,marginTop:8,letterSpacing:0}}>Live classes by best </Text>
                    <Text style={{ color:'#00535d',fontSize:14,fontWeight:"400",marginLeft:30,marginTop:0,letterSpacing:0}}>teachers from LearningHub </Text>
                    <Text style={{ color:'#00535d',fontSize:14,fontWeight:"400",marginLeft:30,marginTop:0,letterSpacing:0}}>to clear your doubts and </Text>
                    <Text style={{ color:'#00535d',fontSize:14,fontWeight:"400",marginLeft:30,marginTop:0,letterSpacing:0}}> to provide indivigual </Text>
                    <Text style={{ color:'#00535d',fontSize:14,fontWeight:"400",marginLeft:30,marginTop:0,letterSpacing:0}}>attention</Text>
                    <TouchableHighlight style={styles.buttonstyle3}><Text style={styles.buttontext3}>Book a free class</Text></TouchableHighlight>
              </View>

              <View style={{backgroundColor:"#002233",height:390,width:230,marginRight:15,borderRadius:10}}>
                    <View style={{backgroundColor:"#00334d",height:80,width:80,borderRadius:50,marginTop:40,marginLeft:30,marginBottom:18}}></View>
                    <Text style={{ color:'white',fontSize:17, fontWeight:"500",marginLeft:30}}>Avail free online</Text>
                    <Text style={{ color:'white',fontSize:17, fontWeight:"500",marginLeft:30}}>conselling session</Text>

                    <Text style={{ color:'#00535d',fontSize:14,fontWeight:"400",marginLeft:30,marginTop:8,letterSpacing:0}}>By LearningHubs carrier </Text>
                    <Text style={{ color:'#00535d',fontSize:14,fontWeight:"400",marginLeft:30,marginTop:0,letterSpacing:0}}>experts </Text>
                    
                    <TouchableHighlight style={styles.buttonstyle4}><Text style={styles.buttontext3}>Shedule a call</Text></TouchableHighlight>
              </View>

             
             
              </View>
            </ScrollView>
          
        </ScrollView>
      
       </View>
       </View>
    )
}
}

 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'white',
    justifyContent:'center',
    marginLeft:30
},
textstyle1:{
    color:'black',
    fontSize:15,
    fontWeight:"500",
},
bgimagestyle1:{
    height:30,
    width:120,
    marginTop:9
    ,marginLeft:10
 },
 bgimagestyle2:{
  height:130,
  width:190,
  marginTop:0,
  marginRight:8,
  borderRadius:9
},
bgimagestyle3:{
  height:300,
  width:230,
  marginTop:20,marginRight:15
},
 buttonstyle1:{
    height:35,
    width:85,
    marginLeft:83,
    marginTop:6,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    borderWidth:1.5,marginRight:0,borderColor:"#00cc00"
  
   },
   
   buttonstyle2:{
    height:50,
    width:100,
    marginRight:4,
    marginTop:0,
    backgroundColor:'white',
    alignItems:'center',
    
    borderRadius:14,
    borderWidth:2,
  
   },
   buttonstyle3:{
    height:50,
    width:140,
    marginLeft:30,
    marginTop:20,
    backgroundColor:'#00cc00',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    borderWidth:0,marginRight:0
  
   },
   buttonstyle4:{
    height:50,
    width:140,
    marginLeft:30,
    marginTop:55,
    backgroundColor:'#00cc00',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    borderWidth:0,marginRight:0
  
   },
   
   buttontext1:{
    fontSize:12,
    color:'#00cc00',
    fontWeight:'bold',
    marginTop:2,marginLeft:5
    
    
    
   },
   buttontext2:{
    fontSize:15,
    color:'black',
    fontWeight:'bold',
    marginTop:10,
    marginLeft:5
    
    
   },
   buttontext3:{
    fontSize:13,
    color:'white',
    fontWeight:'bold',
    
    
    
   },
   icon1:{
    marginTop:4,
    marginLeft:0
  
   },
   icon2:{
    marginTop:1,
    marginLeft:0
  
   },
   icon3:{
    marginTop:7,
    marginLeft:0
  
   }
 })
