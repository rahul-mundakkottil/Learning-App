

//https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialIcons.json

import React from "react";
import { Text,View,Searchbar} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import  Icon from "react-native-vector-icons/Ionicons";
  

// topTab
import VideosB from './src/Tab/videosB'
import ChapterTest from './src/Tab/ChapterTest'
import ResourcesB from "./src/Tab/ResourcesB";
import QnbankB from './src/Tab/QnbankB'


import { ScrollView } from "react-native-gesture-handler";

// stack
import Page01 from './src/Page01'
import Otp from './src/Otp'
import StudentDeatails from './src/StudentDeatails'
import SchoolBoard from './src/SchoolBoard'
import Apptour from './src/Apptour'
import Biology from './src/Biology'
import ChapterVideo from "./src/ChapterVideo";


  // BottomTab
import Home from './src/BottomTab/Home'
import Recent from "./src/BottomTab/Recent";
import Exams from "./src/BottomTab/Exams";
import Profile from './src/BottomTab/Profile'
import Contact from "./src/BottomTab/Contact";

// drower
import DrawerDesign from "./src/Drower/DrawerDesign";
import Examcorner from "./src/Drower/Examcorner";



const Stack =createStackNavigator();

 const Tab =createMaterialTopTabNavigator();
const Drawer =createDrawerNavigator();
const BottomTab =createBottomTabNavigator();




  


function MyStack() { 
    return(
    <Stack.Navigator>
    
   
    <Stack.Screen name="Page01" component={Page01} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="StudentDeatails" component={StudentDeatails} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="SchoolBoard" component={SchoolBoard} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Apptour" component={Apptour} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Biology" component={Biology} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="ChapterVideo" component={ChapterVideo} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="BottomTab" component={MyBottomTab} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Drower" component={MyDrawer} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Tab" component={MyTab} options={{headerShown:false}} ></Stack.Screen>
   
    </Stack.Navigator>)
}


 
  function MyTab(){
    return(
      <View style={{flex:1}}>
       
       
       <View style={{ height:220,
    width:'100%',
    backgroundColor:'#002233',}}>
             <View style={{ flexDirection:"row"}}>
                    <View style={{height:35,width:35,backgroundColor:"#002233",borderRadius:5,borderColor:"white",borderWidth:1.5,
                                    alignItems:"center",justifyContent:"center",marginTop:40,marginLeft:30,}}>
                    <Icon name="arrow-back-ios" size={16} color="#24fc03" style={{marginLeft:4}}/>  
                    </View>
                    <Text style={{fontSize:22,fontWeight:"400",color:"white",marginLeft:100,marginTop:41}}>Biology</Text>
            </View>
                    <Text style={{fontSize:25,fontWeight:"900",color:"white",marginLeft:30,marginTop:30}}>Long chapter name can</Text>
                    <Text style={{fontSize:25,fontWeight:"900",color:"white",marginLeft:30,marginTop:0}}>be shown here</Text>
                    <View style={{height:40,width:300,backgroundColor:"#002233",flexDirection:"row",marginLeft:20,marginTop:3}}>
                        
                            <View style={{flexDirection:"row",marginLeft:9}}>
                                 <Icon name="radio-button-on" size={18} color="#07e354"style={{ marginTop:6,
                                                                                       marginLeft:0}}/>
                                 <Text style={{ fontSize:11,
                                                color:'#07e354',
                                                fontWeight:'bold',
                                                marginTop:8,
                                                marginLeft:3}}>Chaper 1</Text>

                                 <Icon name="radio-button-on" size={18} color="#07e354"style={{ marginTop:6,
                                                                                       marginLeft:15}}/>
                                 <Text style={{ fontSize:11,
                                                color:'#07e354',
                                                fontWeight:'bold',
                                                marginTop:8,
                                                marginLeft:3}}>3 parts</Text>
                            </View>
                        
                    </View>
                </View>  
     
      
      
    <Tab.Navigator screenOptions={{ tabBarIndicatorStyle:{ backgroundColor:'#07e354' ,height:4,width:60,marginLeft:25}}} 
                                     tabBarOptions={{ labelStyle: { textTransform: 'none' ,fontSize:13,fontWeight:"600"},
                                                       tabStyle:{width:105,} ,style:{backgroundColor:"#002233"}}}
                                         > 

        <Tab.Screen name={'Videos'} component={VideosB}  options ={{ tabBarActiveTintColor:'white', tabBarInactiveTintColor:'grey', headerShown:(true), }}></Tab.Screen>
        <Tab.Screen name={"Chapter Test"} component={ChapterTest}  options ={{ tabBarActiveTintColor:'white', tabBarInactiveTintColor:'grey', headerShown:(false)}}></Tab.Screen>
        <Tab.Screen name={"Resources"} component={ResourcesB}  options ={{ tabBarActiveTintColor:'white', tabBarInactiveTintColor:'grey', headerShown:(false)}}></Tab.Screen>
        <Tab.Screen name={"QN Bank"} component={QnbankB}  options ={{ tabBarActiveTintColor:'white', tabBarInactiveTintColor:'grey', headerShown:(false)}}></Tab.Screen>
       
    </Tab.Navigator>
    
    </View>
    
    )
  }

  function MyDrawer(){
    return(
    <Drawer.Navigator  drawerContent={(props)=> <DrawerDesign{...props}/>}>
       <Drawer.Screen name={'DrawerDesign'} component={DrawerDesign}  options ={{ tabBarActiveTintColor:'white', tabBarInactiveTintColor:'grey', headerShown:(false),headerStyle:{backgroundColor:"red"}}} ></Drawer.Screen>
       <Drawer.Screen name={'Home'} component={Home}  options ={{ tabBarActiveTintColor:'white', tabBarInactiveTintColor:'grey', headerShown:(true), }}></Drawer.Screen>
       
    
        
    </Drawer.Navigator>)
}

//home,play,reader,ios-persion,mail// focused ? <Icon name='home' size={24}  color='#07e354'/> :<Icon name='home-outline' size={24} color='grey'/>
function MyBottomTab(){
  return(
    <BottomTab.Navigator screenOptions={{tabBarStyle:{backgroundColor:"white",position:"absolute",bottom:15,height:70,width:369,borderRadius:10,shadowColor:"black",shadowOpacity:0.05,marginHorizontal:17,shadowOffset:{width:10,height:10}}}} >
    <BottomTab.Screen 
    name='Home' 
    component={Home}
   
    options={{headerShown:false,tabBarLabel: '',
      //tabBarLabelStyle:{ fontSize:10,},tabBarStyle:{backgroundColor:"white",borderRadius:10,elevation:10,borderWidth:1,borderColor:"grey",width:"96%",height:60,marginLeft:8},
      tabBarIcon:({focused}) =>
      <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0,backgroundColor:"white"}}>
        <View >
       <Icon name={focused ? 'home':'home-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
       <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:8}}/>
       </View>
       <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8}}>Home</Text>
        </View>
    }}
    />
    <BottomTab.Screen 
    name='Recent' 
    component={Recent}
    options={{headerShown:false,tabBarLabel: '',
    tabBarIcon:({focused}) =>
    <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0,backgroundColor:"white"}}>
      <View >
     <Icon name={focused ? 'play':'play-outline'} size={24} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
     <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:8}}/>
     </View>
     <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8,marginRight:9}}>Recent</Text>
      </View>
     
    }}
    />
    <BottomTab.Screen 
    name='Exams' 
    component={Exams}
    options={{headerShown:false,tabBarLabel: '',
    tabBarLabelStyle:{ fontSize:13},
    tabBarIcon:({focused}) =>
    <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0}}>
      <View >
     <Icon name={focused ? 'reader':'reader-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
     <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:8}}/>
     </View>
     <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8}}>Exams</Text>
      </View>
    }}
    />

<BottomTab.Screen 
    name='Profile' 
    component={Profile}//ios-person
    options={{headerShown:false,tabBarLabel: '',
    tabBarLabelStyle:{ fontSize:13},
    tabBarIcon:({focused}) =>
    <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0}}>
      <View >
     <Icon name={focused ? 'ios-person':'ios-person-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
     <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:8}}/>
     </View>
     <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8}}>Profile</Text>
      </View>
      
    }}
    />

<BottomTab.Screen 
    name='Contact' 
    component={Contact} //mail
    options={{headerShown:false,tabBarLabel: '',
    tabBarLabelStyle:{ fontSize:13},
    tabBarIcon:({focused}) =>
    <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0,backgroundColor:"white"}}>
      <View >
     <Icon name={focused ? 'mail':'mail-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
     <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:9}}/>
     </View>
     <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8}}>Contact</Text>
      </View>
    }}
    />
  </BottomTab.Navigator>
  )
}

export default function App(){
return(
    <NavigationContainer >
    
     
        <MyStack/>
    </NavigationContainer>)
}