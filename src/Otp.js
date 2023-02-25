import React,{Component} from 'react'
import{ 
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight,



}from 'react-native'
import  Icon from "react-native-vector-icons/MaterialIcons";
import OTPTextInput from "react-native-otp-textinput";

 export default class Page01 extends Component{
constructor(){
  console.log("cons called")
  super();
  this.state={realotp:123456, typeotp:0, Data:"100",otpInput:100000}
}
componentDidMount(){
  console.log("componentdidmount called")
} componentDidUpdate(){
  console.log("componentDid called")
} 
presskey(d1){
  this.setState({typeotp:d1}) 
  console.log(typeotp)
}




  render(){
    return( <View style= {styles.container}>
      <Image source={require('../assets/inmakes.jpeg')} style={styles.bgimagestyle1}></Image>
      <Image source={require('../assets/iconotp.png')} style={styles.bgimagestyle2}></Image>
     
       <Text style={styles.textstyle1}>Verification code</Text>
       <Text style={styles.textstyle2}>Please type the verification code send to</Text>
       <View style={{flexDirection:"row"}}>
       <Text style={styles.textstyle3}>{this.props.route.params.transcode}</Text>
       <Text style={{ textAlign:'center',
                       color:'black',
                         fontSize:13,
                      marginBottom:28,
                           marginTop:3,
                    fontWeight:"bold",marginLeft:4}}>{this.props.route.params.transnum}</Text>
       </View>
              <View style={styles.Lowerbox}>
        <OTPTextInput ref={e => (this.otpInput = e)} inputCount={6}  containerStyle={{backgroundColor:"#002510"}} textInputStyle={styles.textinputstyle2} tintColor={"#002c41"} offTintColor={"#002c41"}
                         ></OTPTextInput>
               
                 <TouchableHighlight style={styles.buttonstyle}  onPress={()=> this.props.navigation.navigate('Page01')}><Text style={styles.buttontext}>Resend OTP</Text></TouchableHighlight>
                 <Text style={styles.textstyle4}>Resend after 28s</Text>
                 <View  style={{flexDirection:"row"}}>
                 <Icon name="phone" size={20} color="#00cc00" />
                 <Text style={styles.textstyle5} onPress={()=> this.props.navigation.navigate('StudentDeatails')}>Contact Us</Text>
                 </View>
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
  Lowerbox:{ height:'38%',
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
marginTop:60} ,

textstyle2:{
    textAlign:'center',
    color:'#bfbfbf',
    fontSize:13,
  marginBottom:28,
marginTop:3,
fontWeight:"bold"} ,

textstyle3:{
  textAlign:'center',
  color:'black',
  fontSize:13,
marginBottom:28,
marginTop:3,
fontWeight:"bold"} ,

textstyle4:{
  textAlign:'center',
  color:'#003c59',
  fontSize:13,
marginBottom:28,
marginTop:3,
fontWeight:"bold"} ,

textstyle5:{
  textAlign:'center',
  color:'#00cc00',
  fontSize:15,
marginBottom:28,
marginTop:0,
marginLeft:5,
fontWeight:"bold"} ,

  
 textinputstyle1:{
    height:51,
    width:51,
    backgroundColor:"#002c41" ,
marginLeft:5.5,
marginTop:20,
paddingLeft:20,
borderWidth:0,
borderColor:'blue',
borderRadius:4

 },
 textinputstyle2:{
  height:51,
  width:51,
  backgroundColor:"#002c41" ,
marginLeft:0,
marginTop:20,
paddingLeft:20,
borderWidth:0,
borderColor:'blue',
borderRadius:4

 },
 buttonstyle:{
  height:52,
  width:'85%',
  marginLeft:0,
  marginTop:12,
  backgroundColor:'#00cc00',
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
 bgimagestyle1:{
    height:43,
    width:180,
    marginTop:40,
    marginBottom:0
 },
 bgimagestyle2:{
  height:135,
  width:135,
  marginTop:74,
  marginBottom:8
}
 
 



}
)