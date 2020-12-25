import React, { useEffect, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from "react-native";
import { UserContext } from "../contexts/userContexts";
import { signIn } from "../lib/firebase";

const AuthScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await signIn();
      setUser(user);
      // console.log(setUser);
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
