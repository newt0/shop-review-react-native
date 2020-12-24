import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from "react-native";

const AuthScreen: React.FC = () => {
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
