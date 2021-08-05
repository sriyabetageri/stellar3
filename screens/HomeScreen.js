import { Assets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar,TouchableOpacity,ImageBackground, Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
    return (
    <View style = {styles.container}>
   <SafeAreaView style = {styles.droidSafeArea}/> 
   <ImageBackground source = {require("../assets/stars.gif")} style = {styles.backgroundImage}>

  
   <View style = {styles.titleBar}>
   <Text style = {styles.titleText}> Stellar App!</Text>
   </View>

   <TouchableOpacity style = {styles.routeCard}>
       <Text style = {styles.routeText}>
           Daily Pics
       </Text>
       <Text style = {styles.knowMore}> {"Know More"} </Text>

       <Text styles = {styles.bgDigit}> 1 </Text>

       <Image source = {require("../assets/daily_pictures.png")} style = {styles.iconImage}>

       </Image>
   </TouchableOpacity>

   <TouchableOpacity style = {styles.routeCard}>
       <Text style = {styles.routeText}>
           Space Craft
       </Text>

       <Text style = {styles.knowMore}> {"Know More"} </Text>

       <Text styles = {styles.bgDigit}> 2 </Text>

       <Image source = {require("../assets/spacecraft.png")} style = {styles.iconImage}> 
       </Image>
           
   </TouchableOpacity>

   <TouchableOpacity style = {styles.routeCard}>
       <Text style = {styles.routeText}>
           Star Map
       </Text>
       <Text style = {styles.knowMore}> {"Know More"} </Text>

       <Text styles = {styles.bgDigit}> 3 </Text>

       <Image source = {require("../assets/star_map.png")} style = {styles.iconImage}>
           </Image>
   </TouchableOpacity>
   </ImageBackground>


    
    </View>
    )
    }
} 

const styles = StyleSheet.create({
    container:{flex: 1},
droidSafeArea:{
    marginTop: Platform.OS === "android"? StatusBar.currentHeight:0
},
titleBar:{
    flex:0.15,
    justifyContent: 'center',
    alignItems: 'center',
},
routeCard: {
    flex:0.2,
    marginLeft: 560,
    marginTop:50,
    marginRight:400,
    borderRadius: 30,
    backgroundColor:"white",
},

routeText:{
    fontSize:35,
    fontWeight:"bold",
    color: "black",
    marginTop: 10,
    paddingLeft:30,
},

backgroundImage:{
    flex: 1,
    resizeMode: "cover",

},

knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15
    },
    bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1
    },
    iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80
    }
})