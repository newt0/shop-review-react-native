import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text } from "react-native";
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import IconButton from "../components/IconButton";
import TextArea from "../components/TextArea";
import StarInput from "../components/StarInput";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

const CreateReviewScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>(""),
    [score, setScore] = useState<number>(0);

  // useEffect(() => {
  //   console.log(text, score);
  // }, [text, score]);

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
    });
  }, [shop]);

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea
        value={text}
        onChangeText={(value) => setText(value)}
        label="レビュー"
        placeholder="レビューを書いてください"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default CreateReviewScreen;
