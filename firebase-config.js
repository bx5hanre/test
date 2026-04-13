// ============================================================
//  CLINIQUE NEDJMA 2 — Firebase Configuration
//  ⚠️  Replace ALL values below with your Firebase project credentials
//  How to get them: Firebase Console → Project Settings → Your Apps → Config
// ============================================================

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Shared references — available globally across all pages
const db      = firebase.firestore();
const auth    = firebase.auth();
const storage = firebase.storage();
