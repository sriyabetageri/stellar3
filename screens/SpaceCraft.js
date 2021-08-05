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
    Linking,
    FlatList
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
}
    
    returnItem = ({item})=>{
        return(
            <View style={{borderWidth:1,justifyContent: 'center', alignItems:'center', marginBottom: 10,elevation:10}}>
                <Image
                    source={{uri:item.angecy.image_url}}style={{width: "100%",height:200, marginTop: 15,marginTop:15,marginTop:15,marginBottom:15,marginRight:10 }}></Image>


                    <Text style={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                    <Text style={{color:'#696969'}}>{item.agency.name}</Text>
                    <Text>DESCRIPTION</Text>
                    <Text style={{color:'#A9A9A9', marginLeft:10,marginRight:10}}>{item.agency.description}</Text>
                    </View>

                  
                    
        )
        
    }
    <View
    style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    }}>
        <View styles ={{flex:0.25}}>
            <Text>spacecraft</Text>
        </View>
        <View styles={{flex:0.75}}>
            <FlatList

            keyExtractor={this.keyExtractor}
            data={this.state.aircrafts}
            renderItem={this.renderItem}
            />
        </View>
    </View>
