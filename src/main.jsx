import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./style/Global.css"
import "./style/Varible.css"
import "../src/assets/fonts/fonts.css"
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
