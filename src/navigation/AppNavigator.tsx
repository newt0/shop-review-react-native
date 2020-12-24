import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screen/HomeScreen";

const AppNavigator = () => (
  <NavigationContainer>
    <HomeScreen />
  </NavigationContainer>
);

export default AppNavigator;
