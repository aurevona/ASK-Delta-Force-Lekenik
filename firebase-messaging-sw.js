
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCNH5vRtrW6RWm4O_bDBM08UjO_tskRiyg",
  authDomain: "ask-delta-force-lekenik.firebaseapp.com",
  projectId: "ask-delta-force-lekenik",
  storageBucket: "ask-delta-force-lekenik.firebasestorage.app",
  messagingSenderId: "948888665494",
  appId: "1:948888665494:web:d08367cecc47658b9bf1b7",
  measurementId: "G-EVTG629RP9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "ASK Delta Force Lekenik";
  const options = {
    body: payload.notification?.body || "Imate novu klupsku obavijest.",
    icon: "./logo-original.jpg"
  };

  self.registration.showNotification(title, options);
});
