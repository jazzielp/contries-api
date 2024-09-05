import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fontsource-variable/nunito-sans'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
} else {
  console.error("Root element not found. Make sure you have an element with id 'root' in your HTML.")
}
