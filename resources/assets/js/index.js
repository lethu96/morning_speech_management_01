import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n/i18n';

ReactDOM.render(
    <I18nextProvider i18n={ i18n }>
        <App />
    </I18nextProvider>,
    document.getElementById('app')
);
