import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyDW9Eq6lz5drT_xVtr0qIekXwgMJrKNRhg',
    authDomain: 'codecreaative.firebaseapp.com',
    projectId: 'codecreaative',
    storageBucket: 'codecreaative.firebasestorage.app',
    messagingSenderId: '132383016153',
    appId: '1:132383016153:web:8c0c67e115990ff222eac8',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
