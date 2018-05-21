import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
// react-native
// import { NativeRouter } from 'react-router-native'
// react-dom (what we'll use here)
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>,
                   document.getElementById('app'));