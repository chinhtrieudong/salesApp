//firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDUxtkA6XrvbYVX1G9_HSScf9ZwdyQgDTk',
    authDomain: 'sales-goods-app.firebaseapp.com',
    databaseURL: 'https://sales-goods-app-default-rtdb.firebaseio.com',
    projectId: 'sales-goods-app',
    storageBucket: 'sales-goods-app.appspot.com',
    messagingSenderId: '426734784124',
    appId: '1:426734784124:web:8e353c5f3be650a1c7c3f9',
    measurementId: 'G-D28K5J93S8',
};

const app = initializeApp(firebaseConfig);

export function sendOrderData(userId, orderItem) {
    const db = getDatabase();
    const reference = ref(db, 'orderList/' + userId);
    set(reference, {
        orderItem,
    });
}
