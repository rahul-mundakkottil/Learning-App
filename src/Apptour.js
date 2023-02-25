import React ,{Component} from "react"
import { 
    Text ,View,Image,ImageBackground,TouchableOpacity
} from "react-native"
import  Icon from "react-native-vector-icons/MaterialCommunityIcons";

//height:"63.5%"
export default class Apptour extends Component{
    render(){
        return(
            <View style={{backgroundColor:"white",height:"100%",width:"100%"}}>
                  <Image source={require('../assets/runimg.jpg')}  style={{height:"63.5%",width:'95%',marginLeft:10,marginTop:10,borderRadius:10,borderWidth:0,borderColor:"#1ff507"}}>
                  </Image>
                  <Text style={{fontSize:20,fontWeight:"bold",color:"black",marginLeft:140,marginTop:50,marginBottom:0,fontStyle:"normal"}}>App tour title</Text>
                  <Text style={{fontSize:14,fontWeight:"bold",color:"grey",marginLeft:89,marginTop:2,marginBottom:20,fontStyle:"normal"}}>the app tour discription goes here</Text>
                  <View style={{height:62,width:62,backgroundColor:"white",marginLeft:165,
                                         borderRadius:6,borderWidth:2,alignItems:"center",justifyContent:'center',borderColor:"#00cc00",marginTop:40,}}>
                  <TouchableOpacity style={{height:50,width:50,backgroundColor:"#1AE907",marginLeft:0,
                                         borderRadius:6,borderWidth:0,alignItems:"center",justifyContent:'center',borderColor:"#1ff507",marginTop:0}} onPress={()=> this.props.navigation.navigate('BottomTab')}>
                                            <Icon name="arrow-right" size={22} color="white"style={{marginTop:0,marginLeft:0,marginRight:0}}/>
                 </TouchableOpacity>
                 </View>
            </View>
        )
    }

}