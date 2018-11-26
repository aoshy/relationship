import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ListView,
  View
} from 'react-native';
import { connect } from "react-redux";

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      matchsDataSource: ds.cloneWithRows(this.props.newMatches),
      chatsDataSource: ds.cloneWithRows(this.props.chats),
    }

  }
  
  renderNewMatch(newMatch) {
    return(
      <TouchableOpacity style={{alignItems:'center'}}>
        <Image source = {newMatch.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
        <Text style={{fontWeight:'600', color:'#444'}}>{newMatch.first_name}</Text>
      </TouchableOpacity>
    )
  }

  renderChat(chatObject){
    return(
      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
        <Image source = {chatObject.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
        <View>
          <Text style={{fontWeight:'600', color:'#111'}}>{chatObject.name}</Text>
          <Text numberOfLines ={1} style={{fontWeight:'400', color:'#888', width:200}}>{chatObject.message}</Text>
        </View>
      </TouchableOpacity>
    )
  }

   
  render() {
    return (
      <View style = {{flex:1, marginTop: 20}}>
        <ScrollView style={styles.container}>
          <TextInput 
            style = {{height:50, }}
            placeholder="Search"
          />
          <View style={styles.matches}>
            <Text style = {{color:'#da533c', fontWeight:'600', fontSize:12}}>New Matches</Text>
            <ListView 
              horizontal={true}
              showsHorizontalScrollIndicator = {false}
              dataSource={this.state.matchsDataSource}
              pageSize = {5}
              renderRow={(rowData) =>this.renderNewMatch(rowData)}
            />
          </View>
          <View style = {{margin:10}}>
            <Text style = {{color:'#da533c', fontWeight:'600', fontSize:12}}>MESSAGES</Text>
            <ListView 
              horizontal={false}
              scrollEnabled = {false}
              showsHorizontalScrollIndicator = {false}
              dataSource={this.state.chatsDataSource}
              pageSize = {5}
              renderRow={(rowData) =>this.renderChat(rowData)}
            />
          </View>
          </ScrollView>
        </View>
    )
  }
}

const mapStateToProps = state => ({
  newMatches: state.chatReducer.newMatches,
  chats: state.chatReducer.chats
});

export default connect( mapStateToProps, {} )(Chat);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  matches:{
    borderTopWidth:1,
    paddingTop:15, 
    borderTopColor:'#da533c',
    borderBottomWidth:1,
    paddingBottom:15, 
    borderBottomColor:'#e3e3e3'
  },
  buttons:{
    width:80, 
    height:80, 
    borderWidth:10, 
    borderColor:'#fff', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:40
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
    height: 420,
  }
 
});
