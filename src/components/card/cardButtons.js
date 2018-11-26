import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class CardButtons extends Component {
    render() {
        return(
           <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding: 30}}>
                <TouchableOpacity style = {styles.buttons} onPress = {() => this.props.nope()}>
                    <Iconz name='ios-close' size={62} color="#888" style={{}} />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonSmall}>
                    <Iconz name='ios-information' size={30} color="#888" style={{}} />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttons} onPress = {() => this.props.yup()}>
                    <Iconz name='ios-heart' size={40} color="#888" style={{marginTop:5}} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons:{
        width: 80, 
        height: 80, 
        borderWidth: 10, 
        borderColor: '#e7e7e7', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 40
      },
      buttonSmall:{
        width: 60, 
        height: 60, 
        borderWidth: 10, 
        borderColor: '#e7e7e7', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 30
      }
});