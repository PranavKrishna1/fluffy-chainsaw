import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0i7nyIz48roi7NlhbryQXkCiZ9d2qxVQ",
    authDomain: "bus-ticket-booking-4b29e.firebaseapp.com",
    projectId: "bus-ticket-booking-4b29e",
    storageBucket: "bus-ticket-booking-4b29e.appspot.com",
    messagingSenderId: "249975921598",
    appId: "1:249975921598:web:488828cafd6a52775e77ef",
    measurementId: "G-PJ5MHVWJ4X"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();


export default app;
  