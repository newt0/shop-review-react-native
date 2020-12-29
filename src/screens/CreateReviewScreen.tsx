import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
} from "react-native";
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import IconButton from "../components/IconButton";
import TextArea from "../components/TextArea";
import StarInput from "../components/StarInput";
import Button from "../components/Button";
import { createReviewRef, uploadImage } from "../lib/firebase";
import { UserContext } from "../contexts/userContexts";
import firebase from "firebase";
import { Review } from "../types/review";
import { pickImage } from "../lib/image-picker";
import { getExtention } from "../utils/file";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

const CreateReviewScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>(""),
    [score, setScore] = useState<number>(0),
    [imageUri, setImageUri] = useState<string>("");
  const { user } = useContext(UserContext);

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

  const onSubmit = async () => {
    // get the document id
    const reviewDocRef = await createReviewRef(shop.id);
    // decide the path of storage
    const ext = getExtention(imageUri);
    const storagePath = `reviews/${reviewDocRef.id}.${ext}`;
    // upload the photo to storage
    const downloadUrl = await uploadImage(imageUri, storagePath);
    // make the review document
    const review = {
      user: {
        name: user?.name,
        id: user?.id,
      },
      shop: {
        name: shop.name,
        id: shop.id,
      },
      text: text,
      score: score,
      imageUrl: downloadUrl,
      updatedAt: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now(),
    } as Review;
    await reviewDocRef.set(review);
  };

  const onPickImage = async () => {
    const uri = await pickImage();
    setImageUri(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea
        value={text}
        onChangeText={(value) => setText(value)}
        label="レビュー"
        placeholder="レビューを書いてください"
      />
      <View style={styles.photoContainer}>
        <IconButton name="camera" color="#ccc" onPress={onPickImage} />
        {!!imageUri && (
          <Image style={styles.image} source={{ uri: imageUri }} />
        )}
      </View>
      <Button text="レビューを投稿する" onPress={onSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  photoContainer: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});

export default CreateReviewScreen;
