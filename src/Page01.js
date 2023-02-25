import React,{Component} from 'react'
import{ 
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight



}from 'react-native'
 export default class Page01 extends Component{

constructor(){
  super();
  this.state={phonenumber:null,countrycode:"+91"}
}



  render(){
    return( <View style= {styles.container}>
      <Image source={require('../assets/inmakes.jpeg')} style={styles.bgimagestyle}></Image>
 
       <Text style={styles.textstyle1}>Enter your mobile number</Text>
       <Text style={styles.textstyle2}>We will send you an OTP for verify</Text>
      
              <View style={styles.Lowerbox}>
                <View style={{flexDirection:"row",marginTop:6}}>
                 <TextInput style={styles.textinputstyle1} placeholder="+91" placeholderTextColor='white' maxLength={3}  onChangeText={(entercode)=> this.setState({countrycode:entercode})}></TextInput>
                 <TextInput style={styles.textinputstyle2} placeholder="Mobile number" placeholderTextColor='grey' maxLength={10}  onChangeText={(enternumber)=> this.setState({phonenumber:enternumber})}></TextInput>

                 </View>
                 <TouchableHighlight style={styles.buttonstyle} onPress={()=> this.props.navigation.navigate('Otp',{transnum:this.state.phonenumber,transcode:this.state.countrycode})}><Text style={styles.buttontext}>continue</Text></TouchableHighlight>

              </View>
           </View>
             
             

         

    )
  }
 }
const styles=StyleSheet.create({
   
  container:{ height:'100%',
  width:'100%',
  backgroundColor:'white',
  alignItems:'center',
 
  },
  Lowerbox:{ height:'26%',
  width:'99.8%',
  backgroundColor:'#002510',
  alignItems:'center',
  borderTopLeftRadius:15,
  borderTopRightRadius:15,

 
  },
  textstyle1:{
    textAlign:'center',
    color:'black',
    fontSize:20,
  fontWeight:"bold",
marginTop:200} ,

textstyle2:{
    textAlign:'center',
    color:'grey',
    fontSize:13,
  marginBottom:28,
marginTop:3,
fontWeight:"bold"} ,

  
 textinputstyle1:{
    height:60,
    width:'18%',
    backgroundColor:"#002c41" ,
marginLeft:15,
marginTop:20,
paddingLeft:20,
borderWidth:0,
borderColor:'blue',
borderRadius:4

 },
 textinputstyle2:{
    height:60,
    width:'67%',
  backgroundColor:"#002c41",
marginLeft:4,
marginTop:20,
paddingLeft:20,
borderWidth:0,
borderColor:'blue',
borderRadius:4,
marginRight:15

 },
 buttonstyle:{
  height:60,
  width:'86%',
  marginLeft:0,
  marginTop:12,
  backgroundColor:'#2ECC71',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:5,
  borderWidth:0

 },
 
 buttontext:{
  fontSize:16,
  color:'white',
  fontWeight:'bold'
  
  
 },
 bgimagestyle:{
    height:50,
    width:200,
    marginTop:220
 }
 
 



}
)