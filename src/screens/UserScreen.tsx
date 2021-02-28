import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import "firebase/firestore";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import Form from "../components/Form";
import Button from "../components/Button";
import { UserContext } from "../contexts/userContexts";
import { updateUser } from "../lib/firebase";
import firebase from "firebase";
import Loading from "../components/Loading";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState<string>(user.name);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true);
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser(user.id, {
      name,
      updatedAt,
    });
    setUser({ ...user, name, updatedAt });
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loading visible={loading} />
      <Text>User Screen</Text>
      <Form
        value={name}
        label={"名前"}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Button text={"保存する"} onPress={onSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default UserScreen;
