import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./MainTabNavigator";

const AppNavigator = () => (
  <NavigationContainer>
    <MainTabNavigator />
  </NavigationContainer>
);

export default AppNavigator;
