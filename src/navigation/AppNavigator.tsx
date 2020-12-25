import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./MainTabNavigator";
import AuthScreen from "../screens/AuthScreen";

const AppNavigator = () => {
  const user = null;

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
