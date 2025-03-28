import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.tsx'
import './i18n';
import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <App />
</BrowserRouter>
)
