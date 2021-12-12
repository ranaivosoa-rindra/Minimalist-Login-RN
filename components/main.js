import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function Main(){
    return(
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
    >
    <View style={styles.container}>
        {/* <Text style = {{color: "#fff"}}>Open up App.js to start working on your app!</Text> */}
        <View style = {styles.AllContainer}>
            <View style = {styles.loginContainer}>
                <View style = {styles.welcomeText}>
                    <Text style = {styles.wbText}>
                        Welcome Back!
                    </Text>
                </View>
                <View style = {styles.loginText}>
                    <Text style = {styles.lText}>
                        Login
                    </Text>
                </View>
                <View style = {styles.boxesContainer}>
                    <View style = {styles.input}>
                        <TextInput
                            style = {styles.inputInside}
                            keyboardType= 'email-address'
                            textContentType='emailAddress'
                            placeholder='Email Address'
                            placeholderTextColor={"#7D8A97"}
                            autoCapitalize={"none"}
                        />
                    </View>
                    <View style = {styles.input}>
                        <TextInput
                            style = {styles.inputInside}
                            secureTextEntry = {true}
                            placeholder='Password'
                            placeholderTextColor={"#7D8A97"}
                        />
                    </View>
                    <View style = {styles.forgotTextView}>
                        <TouchableOpacity
                            onPress={() => console.log("Really ? did your really forget your password ?")}
                        >
                            <Text style = {styles.fText}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.buttonView}>
                        <TouchableOpacity
                            style = {styles.touchableButton}
                            onPress={() => console.log("Log in button clicked!")}
                        >
                            <Text style = {styles.bText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style = {styles.iconsContainer}>
                <TouchableOpacity 
                    style = {styles.iconCircle}
                    onPress={() => console.log("Log in with google")}
                    >
                        <Icon
                            name='google'
                            type='font-awesome'
                            size={30}
                            color={"#808E9B"}
                        />
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.iconCircle}
                onPress={() => console.log("Log in with facebook")}
                >
                    <Icon
                        name='facebook-square'
                        type='font-awesome'
                        size={30}
                        color={"#808E9B"}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.iconCircle}
                onPress={() => console.log("Log in with apple")}
                >
                    <Icon
                        name='apple'
                        type='font-awesome'
                        size={30}
                        color={"#808E9B"}
                    />
                </TouchableOpacity>
            </View>
            <View style = {styles.signUp}>
                <Text style = {styles.greyText}>
                    Don' you have an account?
                </Text>
                <TouchableOpacity
                onPress={() => 
                    console.log("Sign up text clicked!")
                }
                >
                    <Text style = {styles.signUpText}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#222222',
      flex: 1,
      paddingTop: StatusBar.currentHeight
    },
    AllContainer: {
        height: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    loginContainer: {
        marginBottom: 31
    },
    welcomeText: {
        paddingTop: 39,
        paddingBottom: 30
    },
    wbText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 35,
    },
    loginText: {
        marginBottom: 17
    },
    lText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    boxesContainer: {
        flexDirection: 'column'
    },
    input: {
        marginBottom: 13,
        backgroundColor: "#333333",
        paddingLeft: 10,
        borderRadius: 10,
        paddingVertical: 13
    },
    inputInside: {
        width: "100%",
        fontSize: 18,
        color: "#fff"
    },
    forgotTextView: {
        flexDirection: "row-reverse",
        marginBottom: 24
    },
    fText: {
        fontSize: 18,
        color: "#B23770"
    },
    buttonView: {
        backgroundColor: '#833471',
        borderRadius: 11
    },
    touchableButton:{
        paddingVertical: 10
    },
    bText: {
        fontSize: 23,
        textAlign: "center",
        color: "#fff"
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 18,
        paddingHorizontal: 68
    },
    iconCircle: {
        backgroundColor: "#c0c",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 100,
        backgroundColor: "#333333"
    },
    signUp: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    greyText: {
        color: "#555D65",
        fontSize: 20,
        marginRight: 4
    },
    signUpText: {
        fontSize: 20,
        color: '#B53471',
    }
  });
  