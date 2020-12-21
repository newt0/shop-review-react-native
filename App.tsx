import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import { StyleSheet, Text, View } from "react-native";

if (!firebase.apps.length) {
  // 初期化の重複を避ける
  const firebaseConfig = {
    apiKey: "AIzaSyCqn24Feu4_P8O1sKbR5T81_YGs7cRmggY",
    authDomain: "shop-review-d5caf.firebaseapp.com",
    projectId: "shop-review-d5caf",
    storageBucket: "shop-review-d5caf.appspot.com",
    messagingSenderId: "529680463458",
    appId: "1:529680463458:web:4cdb8db4d364ff3d4fc33b",
    measurementId: "G-69R876358W",
  };

  firebase.initializeApp(firebaseConfig);
}

type Shop = {
  name: string;
  place: string;
};

const App = () => {
  const [shops, setShops] = useState<Shop>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map((doc) => doc.data() as Shop);
    setShops(shops);

    const db = firebase.firestore();
    // const shopDocumentReference = db.collection("shops").doc("1");
    // console.log(shopDocumentReference);
    // await shopDocumentReference.update({ name: "品川店２" });
    // await shopDocumentReference.delete();
    // const shopCollectionReference = db.collection("shops");
    // shopCollectionReference.add({ name: "キッチンおとぼけ", place: "早稲田" });
    // const shopDocumentSnapshot = await db.collection("shops").doc("2").get();
    // const shop = shopDocumentSnapshot.data();
    // console.log("snapshotのget()>>>", shopDocumentSnapshot);
    // console.log("snapshotのdata()>>", shop);
    const querySnapshot = await db.collection("shops").get();
    // console.log(querySnapshot.size);
    // if (querySnapshot.size > 0) {
    //   const queryDocumentSnapshot = querySnapshot.docs[1];
    //   const shop = queryDocumentSnapshot.data();
    //   console.log("docsの1つめ>>>", shop);
    // }
    if (querySnapshot.size > 0) {
      const shops = querySnapshot.docs.map((doc) => doc.data());
      console.log(shops);
    }
  };

  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));

  return <View style={styles.container}>{shopItems}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
