import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import FormTagExample from "./components/FormTagExample.jsx"
import ReusableFormTags from "./components/ReusableFormTags.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<FormTagExample />} />
          <Route path="reuse" element={<ReusableFormTags />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
