import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './redux';
import routes from './root-routes';

const browserRouter = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={browserRouter}/>
    </Provider>
  </React.StrictMode>
);