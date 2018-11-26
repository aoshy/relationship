import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Card extends Component {
    render() {
        return(
            <View style={styles.card}>
                <Image source ={this.props.card.image} resizeMode="contain" style ={{width:350, height:350}} />
                <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', margin:15, marginTop:25,}} >
                        <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{this.props.card.first_name}, </Text>
                        <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>{this.props.card.age}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{padding:13,  borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}>
                            <Icon name='people-outline' size={20} color="#777" style={{}} />
                            <Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{this.props.card.friends}</Text>
                        </View>
                        <View style={{padding:13, borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}>
                            <Icon name='import-contacts' size={20} color="#777" />
                            <Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{this.props.card.interests}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#e3e3e3',
        width: 350,
        height: 420
    }
});