import * as functions from "firebase-functions";
import { User } from "./types/user";
import admin = require("firebase-admin");

exports.onUpdateUser = functions
  .region("us-central1")
  .firestore.document("users/{userId}")
  .onUpdate(async (change, context) => {
    const { userId } = context.params;
    const newUser = change.after.data() as User;

    const db = admin.firestore();

    try {
    } catch (err) {
      console.log(err);
    }
  });
