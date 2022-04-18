import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";
import Color from "../constants/color";
import Font from "../constants/font";
import { Ionicons } from "@expo/vector-icons";

class LoginScreen extends Component {
  render() {
    const { title, backbutton } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Color.primary} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {backbutton ? (
              <Ionicons
                name="ios-arrow-back"
                color={Color.white}
                size={25}
                style={{ marginEnd: 20 }}
              />
            ) : (
              <Ionicons
                name="ios-menu"
                color={Color.white}
                size={30}
                style={{ marginEnd: 20 }}
              />
            )}
            <Text style={styles.titleText}>{title}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="ios-search"
              color={Color.white}
              size={30}
              style={{ marginStart: 20 }}
            />
            <Ionicons
              name="ios-options"
              color={Color.white}
              size={30}
              style={{ marginStart: 20 }}
            />
            <Ionicons
              name="ios-notifications-outline"
              color={Color.white}
              size={30}
              style={{ marginStart: 20 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  titleText: {
    color: Color.white,
    fontFamily: Font.FONT_REGULAR,
    fontSize: 22,
  },
});

export default LoginScreen;
