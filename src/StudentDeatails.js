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
import  Icon from "react-native-vector-icons/FontAwesome";
import { SelectList } from 'react-native-dropdown-select-list'
import SelectDropdown from 'react-native-select-dropdown';

const States = [
  'Kerala',
  'Karnataka',
  'Tamilnadu',
  'Goa',
  'kashmeer',
  'Punjab',
  'Sikkim',
  'Rajasthan',
  'Odisha'
  
];


 export default class Page01 extends Component{
  constructor(){
    super();
    this.state={bordercolour1:"#002c41",bordercolour2:"#002c41",bordercolour3:"#002c41",bordercolour4:"#002c41",}
  }
     




  render(){
    return( <View style= {styles.container}>
      <Image source={require('../assets/inmakes.jpeg')} style={styles.bgimagestyle1}></Image>
      <Image source={require('../assets/iconotp.png')} style={styles.bgimagestyle2}></Image>
 
       <Text style={styles.textstyle1}>Student deatails</Text>
       
      
              <View style={styles.Lowerbox}>
                
                 <TextInput  style={{ height:45,
                                      width:'85%',
                                      backgroundColor:"#002c41" ,
                                      marginTop:20,
                                      paddingLeft:20,
                                      borderWidth:1,
                                      borderColor:this.state.bordercolour1,
                                      borderRadius:4}}
                                      onFocus={()=>this.setState({bordercolour1:"#00cc00",
                                                                  bordercolour2:"#002510",
                                                                  bordercolour3:"#002510",
                                                                  bordercolour4:"#002510"})}
                                     // onBlur={()=>this.setState({bordercolour1:"#002510"})}
                                      placeholder="Full name" placeholderTextColor='#005c79' ></TextInput>
                  <TextInput  style={{ height:45,
                                      width:'85%',
                                      backgroundColor:"#002c41" ,
                                      marginTop:10,
                                      paddingLeft:20,
                                      borderWidth:1,
                                      borderColor:this.state.bordercolour2,
                                      borderRadius:4}}
                                      onFocus={()=>this.setState({bordercolour2:"#00cc00",
                                                                  bordercolour1:"#002510",
                                                                  bordercolour3:"#002510",
                                                                  bordercolour4:"#002510"})}
                                     // onBlur={()=>this.setState({bordercolour2:"#002510"})}
                                      placeholder="Email" placeholderTextColor='#005c79' ></TextInput>
                
                  <SelectDropdown
                                      data={States}
                                      // defaultValueByIndex={1}
                                      // defaultValue={'Egypt'}
                                      onSelect={(selectedItem, index) => {
                                      console.log(selectedItem, index);
                                       }}
                                      defaultButtonText={'Select state'}
                                      buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                       }}
                                       rowTextForSelection={(item, index) => {
                                       return item;
                                         }}
                                       buttonStyle={{ width: '85%',
                                                      height: 50,
                                                      backgroundColor: '#002c41',
                                                      borderRadius: 4,
                                                      borderWidth: 1,
                                                      borderColor:this.state.bordercolour3,
                                                       marginTop:10}}
                                                       onFocus={()=>this.setState({bordercolour3:"#00cc00",
                                                                                   bordercolour2:"#002510",
                                                                                   bordercolour1:"#002510",
                                                                                   bordercolour4:"#002510"})}
                                                     //  onBlur={()=>this.setState({bordercolour3:"#002510"})}
                                       buttonTextStyle={{color: '#005c79', textAlign: 'left',fontSize:15,marginTop:0}}
                                      renderDropdownIcon={isOpened => {
                                   return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#005c79'} size={13} style={{marginRight:8}} />;
                               }}
                                      dropdownIconPosition={'right'}
                                      dropdownStyle={styles.dropdown1DropdownStyle}
                                      rowStyle={styles.dropdown1RowStyle}
                                      rowTextStyle={styles.dropdown1RowTxtStyle}
                                         />

                  <TextInput  style={{ height:45,
                                      width:'85%',
                                      backgroundColor:"#002c41" ,
                                      marginTop:10,
                                      paddingLeft:20,
                                      borderWidth:1,
                                      borderColor:this.state.bordercolour4,
                                      borderRadius:4}}
                                      onFocus={()=>this.setState({bordercolour4:"#00cc00",
                                                                  bordercolour2:"#002510",
                                                                  bordercolour3:"#002510",
                                                                  bordercolour1:"#002510"})}
                                    //  onBlur={()=>this.setState({bordercolour4:"#002510"})}
                                      placeholder="Pin code" placeholderTextColor='#005c79' ></TextInput>
                 
                 <TouchableHighlight style={styles.buttonstyle} onPress={()=> this.props.navigation.navigate('SchoolBoard')}><Text style={styles.buttontext}>Register</Text></TouchableHighlight>
                

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
  Lowerbox:
  { height:'90%',
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
marginTop:60,
marginBottom:30} ,

 textinputstyle:{
  height:45,
  width:'85%',
 backgroundColor:"#002c41" ,
 marginTop:20,
paddingLeft:20,
   borderWidth:1,
  borderRadius:4

 },
 
 buttonstyle:{
  height:52,
  width:'85%',
  marginLeft:0,
  marginTop:20,
  backgroundColor:'#00cc00',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:5,
  borderWidth:0,
  marginBottom:30

 },
 
 buttontext:{
  fontSize:16,
  color:'white',
  fontWeight:'bold'
  
  
 },
 bgimagestyle1:{
    height:40,
    width:160,
    marginTop:40,
    marginBottom:0
 },
 bgimagestyle2:{
  height:120,
  width:120,
  marginTop:69,
  marginBottom:2
},
textinputstyleofffocus:{
  height:45,
  width:'85%',
  backgroundColor:"#002c41" ,
  marginTop:20,
  paddingLeft:20,
  borderWidth:2,
  borderColor:"red",
  borderRadius:4

},
textinputstyleonfocus:{
  height:45,
  width:'85%',
  backgroundColor:"#002c41" ,
  marginTop:20,
  paddingLeft:20,
  borderWidth:1,
  borderColor:"#00cc00",
  borderRadius:4

},
 
 



}
)