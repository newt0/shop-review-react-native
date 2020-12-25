import React, { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from "react-native";
import { signIn } from "../lib/firebase";

const AuthScreen: React.FC = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const user = await signIn();
      console.log("user >>>", user);
    };

    fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
      <Text>now loading...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AuthScreen;
