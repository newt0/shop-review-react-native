import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./MainTabNavigator";
import AuthScreen from "../screens/AuthScreen";
import { UserContext } from "../contexts/userContexts";

const AppNavigator = () => {
  const { user } = useContext(UserContext);
  // console.log("user>>>", user);

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
