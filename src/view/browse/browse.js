import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from "react-redux";
import Card from '../../components/card/card';
import CardButtons from '../../components/card/cardButtons';

class Browse extends Component {

    renderCard(card) {
        return (
            <Card card={card} />
        )
    }

    noMore() {
        return (
            <View style={styles.card} >
                <Text>No More Cards</Text>
            </View>
        )
    }

    yup = () => {
        this.refs['swiper']._forceRightSwipe();
    }

    nope = () => {
        this.refs['swiper']._forceLeftSwipe();
    }
    

    render() {
        return (
        <View style={styles.container} >
            <View >
                <Text style={styles.text}>Browse</Text>
            </View>
            <View style={styles.viewSwipeCards}>
                <SwipeCards
                    ref={'swiper'}
                    cards={this.props.cards}
                    containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', margin:20}}
                    renderCard={(cardData) => this.renderCard(cardData)}
                    renderNoMoreCards={() => this.noMore()}
                />
                <CardButtons
                    yup={this.yup.bind(this)}
                    nope={this.nope.bind(this)}
                />
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    viewSwipeCards: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        marginTop: 100
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
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50
    }
   
});

const mapStateToProps = state => ({
    cards: state.cardReducer.cards
});
  
export default connect( mapStateToProps, {} )(Browse);