 
import Layout from '../views/layout/layout'
// Pages
import App from '../views/app'

 // Routes
const Routes = {
  '/index': {
    render: () => m(Layout, m(App)),
  }
};

const DefaultRoute = '/index';

export { Routes, DefaultRoute }