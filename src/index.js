import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);




// title: Your one-stop shop for everything.
// desc: Find the lowest prices on all your favorite products at our online store. We offer a wide variety of products, including clothes, electronics, home goods, and more. Plus, we always have attractive discounts and promotions available.