import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

import './index.scss';
import '@/assets/css/index.scss';
// import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
try {
  // const rootElement = document.getElementById('root');

  // Modal.setAppElement(rootElement);

  const renderApp = () => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root'),
    );
  };
  renderApp();
} catch (e) {
  console.log('e');
}
