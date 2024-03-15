import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Dispatch the action to fetch users
store.dispatch(fetchUsers());

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

// Render your app within the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
