import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyABhHH_GRrIEzvOodEMlR3TqELB4xRMqHM",
  authDomain: "project-4cb84.firebaseapp.com",
  projectId: "project-4cb84",
  storageBucket: "project-4cb84.appspot.com",
  messagingSenderId: "376940190799",
  appId: "1:376940190799:web:7dcaed1433f2e9b92c1e3a",
});

export const auth = app.auth();
export default app;
