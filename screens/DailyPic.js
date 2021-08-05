import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Alert,
    Platform,
    TouchableOpacity,
    Linking
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

export default class DailyPicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {},
        };
    }

    componentDidMount() {
        this.getDailyPic()
    }

    getData = () => {
        axios
            .get("6o44Ez1MTcoGfCtGvIghtksfEDy7YWkf9b10U5hH")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
        }

<View style={styles.container}>

<SafeAreaView style={styles.droidSafeArea}/>
<ImageBackground
    source={require('../assets/star-background.jpg')} style={styles.backgroundImage}>
        <Text style={styles.routeText}>Astronomy Picture of the day</Text>
        <Text style={styles.titleText}>{thisstate.apod.title}</Text>
        <TouchableOpacity style = {styles.listContainer}
        onPress={()=> Linking.openURL(his.state.apod.url).catch(err=> console.error("Couldn't load page", err))}
        >
            
            <View style = {styles.iconContainer}>
                <Image source={require("../assets/play-video.png")} style = {{width:50, height:50}}></Image>
            </View>
            
        </TouchableOpacity>
        

        <Text style = {styles.explanationText}>this.ate.apod.explanation</Text>
    </ImageBackground>
</View>


        
