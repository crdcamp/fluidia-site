import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/* 
This is the JavaScript entry point that connects Ract to the HTML
- Imports the main App component
- Finds the "root" div in index.html
- Creates a React root in that div
- 
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
