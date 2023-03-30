// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.VITE_APIKEY,
	authDomain: import.meta.VITE_AUTHDOMAIN,
	projectId: import.meta.VITE_PROJECTID,
	storageBucket: import.meta.VITE_STORAGEBUCKET,
	messagingSenderId: import.meta.VITE_MESSAGINGSENDERID,
	appId: import.meta.VITE_APPID
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApp();
	deleteApp(firebaseApp);
	firebaseApp = initializeApp(firebaseConfig);
}
export const auth = getAuth(firebaseApp);
