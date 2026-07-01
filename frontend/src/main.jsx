import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { dark } from "@clerk/themes";
import Navbar from './components/Navbar.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '../src/ThemeContext.jsx'
import ThemedClerkProvider from './components/ThemedClerkProvider.jsx';
createRoot(document.getElementById('root')).render(
<StrictMode>
  <ThemeProvider>
    <ThemedClerkProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemedClerkProvider>
  </ThemeProvider>
</StrictMode>
)