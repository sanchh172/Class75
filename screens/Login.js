import React, {Component} from "react";
import {
    View,
    StyleSheet, 
    ImageBackground,
    Image,  
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    KeyboardAvoiding
}
from "react-native";

import firebase from "firebase";

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Components{
    constructor(props){
        super(props);
        this.state = { 
            email:"",
            password:""
        };
    }

    handleLogin =(email, password) =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.props.navigation.navigate(bottomTab)
        })
    }
    render(){
        const {email,password} = this .state;
        return(
          <keyboardAvoidingView  behavior = "padding" style = {styles.container} >
            <ImageBackground   source= {bgImage}     >

            <View>

                
            <TextInput
              style={styles.textinput}
              onChangeText={text => this.setState({ email: text })}
              placeholder={"Enter Email"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
            />
            
            <TextInput
                style={styles.textinput}
                onChangeText={text => this.setState({ password: text })}
                placeholder={"Enter Password"}
                placeholderTextColor={"#FFFFFF"}
                autoFocus
              />  



            
            </View>   
                
            </ImageBackground>


          </keyboardAvoidingView>  
        )
    } 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    bgImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    upperContainer: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },
    appIcon: {
      width: 200,
      height: 200,
      resizeMode: "contain",
      marginTop: 80
    },
    appName: {
      width: 80,
      height: 80,
      resizeMode: "contain"
    },
    lowerContainer: {
      flex: 0.5,
      alignItems: "center"
    },
    textinputContainer: {
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "#9DFD24",
      borderColor: "#FFFFFF"
    },
    textinput: {
      width: "57%",
      height: 50,
      padding: 10,
      borderColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth: 3,
      fontSize: 18,
      backgroundColor: "#5653D4",
      fontFamily: "Rajdhani_600SemiBold",
      color: "#FFFFFF"
    },
    scanbutton: {
      width: 100,
      height: 50,
      backgroundColor: "#9DFD24",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    scanbuttonText: {
      fontSize: 24,
      color: "#0A0101",
      fontFamily: "Rajdhani_600SemiBold"
    },
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15
    },
    buttonText: {
      fontSize: 24,
      color: "#FFFFFF",
      fontFamily: "Rajdhani_600SemiBold"
    }
  });
  
