import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample1 from './components/Sample1';
import Sample2 from './components/Sample2';
import Checkout from './shop/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor: '#25addd' }}><h2>Index Default Page</h2></div>} />
                    <Route path="/sample1" element={<Sample1 />} />
                    <Route path="/sample2" element={<Sample2 />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Route>
                <Route path="*" element={<h1 style={{ textAlign: 'center' }}>Error: Page not found</h1>}></Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);

