import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  Dimensions,
  View,
  ScrollView
} from 'react-native';
import { connect } from "react-redux";

var {height, width} = Dimensions.get('window');

var profilePic = require('../../resources/images/upwork.jpg');

class Profile extends Component {
  
  render() {
    return (
      <View style={{flex:1, marginTop: 32}}>
        <ScrollView style={styles.container}>
          <Image source ={profilePic} resizeMode="stretch" style={{height:350, width:width}} />
          <View style={[styles.row, {marginTop:15}]}>
            <Text style = {{fontSize:19, fontWeight:'400'}}>{this.props.name}, </Text>
            <Text style={{fontSize:21, fontWeight:'300', marginBottom:-2}}>{this.props.age}</Text>
          </View>
          <View style={styles.row}>
            <Text style={{color:'#444', fontSize:15}}>{this.props.workLocation}</Text>
          </View>
          <View style={styles.row}>
            <Text style={{color:'#777', fontSize:11}}>less than a mile away</Text>
          </View>
          <View style={styles.description}>
            <Text style={{color:'#555'}}>{this.props.description}</Text>
          </View>
          <View style ={styles.commons}>
            <Text style = {styles.title}>{this.props.friends} Common Connections</Text>
            <Text style={{marginTop:10, fontSize:14, color:'#666', fontWeight:"400"}}>We compare your Facebook friends with those of your matches to display any common connections</Text>
          </View>
          <View style ={styles.commons}>
            <Text style = {styles.title}>Instagram Photos</Text>
            <ScrollView horizontal = {true}>
              <View style ={{}}>
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
              <View style ={{}}>
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
                <Image source ={profilePic} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  name: state.profileReducer.name,
  workLocation: state.profileReducer.workLocation,
  friends: state.profileReducer.friends,
  description: state.profileReducer.description,
  age: state.profileReducer.age
});

export default connect( mapStateToProps, {} )(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  row: {
    flexDirection:'row',
    margin:15,
    marginBottom:0,
    marginTop:5,
    alignItems:'flex-end'
  },
  title:{
    fontSize:14,
    fontWeight:'600',
    color:'#333'
  },
  commons:{
    padding:15
  },
  buttons:{
    width:80, 
    height:80, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:40
  },
  description:{
    padding:15,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#e3e3e3',
    marginTop:10,
    marginBottom:10
  },
  buttonSmall:{
    width:50, 
    height:50, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:25
  },
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
