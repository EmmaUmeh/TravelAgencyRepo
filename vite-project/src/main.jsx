import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
