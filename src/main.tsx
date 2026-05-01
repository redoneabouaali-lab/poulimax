import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChickenWebsite from './components/ChickenWebsite';

// Get the existing root element and render our component
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChickenWebsite />
    </React.StrictMode>
  );
}