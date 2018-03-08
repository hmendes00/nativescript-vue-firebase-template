const firebase = require("nativescript-plugin-firebase/app");

const firebaseApp = firebase.initializeApp({
})

export const db = firebaseApp.firestore()
