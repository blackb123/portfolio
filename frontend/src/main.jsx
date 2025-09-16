import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Themecontext,Themeprovider } from '../context/themecontext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Themeprovider>
      <App />
    </Themeprovider>

  </StrictMode>,
)
