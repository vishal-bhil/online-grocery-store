import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Color from "../constants/color";
import Font from "../constants/font";

class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../images/ic_homepage.png")} />
        </View>
        <View style={{ padding: 50 }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: Color.white,
    fontFamily: Font.FONT_SEMI_BOLD,
    fontSize: 20,
  },
});

export default SignupScreen;
