// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAerpMDMoMxmrZIDwqA2pn0YYqRxNvFb7c",
//   authDomain: "first-project-3145f.firebaseapp.com",
//   projectId: "first-project-3145f",
//   storageBucket: "first-project-3145f.firebasestorage.app",
//   messagingSenderId: "909964235266",
//   appId: "1:909964235266:web:62b310a36d20f91a6b4d1b",
//   measurementId: "G-F8DNSGW276"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);




// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAerpMDMoMxmrZIDwqA2pn0YYqRxNvFb7c",
  authDomain: "first-project-3145f.firebaseapp.com",
  projectId: "first-project-3145f",
  storageBucket: "first-project-3145f.firebasestorage.app",
  messagingSenderId: "909964235266",
  appId: "1:909964235266:web:62b310a36d20f91a6b4d1b",
  measurementId: "G-F8DNSGW276"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);