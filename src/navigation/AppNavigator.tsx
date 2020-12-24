import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import HomeStackNavigator from "./HomeStackNavigator";

const AppNavigator = () => (
  <NavigationContainer>
    <HomeStackNavigator />
  </NavigationContainer>
);

export default AppNavigator;
