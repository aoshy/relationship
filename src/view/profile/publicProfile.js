import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";

class PublicProfile extends Component {
  state = {};

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow", padding: 32 }}>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Transition shared="demo">
          <Text style={styles.text}>
            Wassup        
          </Text>
        </Transition>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50
  }
});

export default PublicProfile;
