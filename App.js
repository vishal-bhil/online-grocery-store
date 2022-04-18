import React, { Component } from "react";
import AppNavigator from "./src/router/AppNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { SafeAreaView } from "react-native";

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      PoppinsMedium: require("./src/fonts/PoppinsMedium.ttf"),
      PoppinsSemiBold: require("./src/fonts/PoppinsSemiBold.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return <AppNavigator />;
    } else {
      return <AppLoading />;
    }
  }
}
