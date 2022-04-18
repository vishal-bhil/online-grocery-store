import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" headerMode="none">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
