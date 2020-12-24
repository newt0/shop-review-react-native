import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

const ShopScreen: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
export default ShopScreen;
