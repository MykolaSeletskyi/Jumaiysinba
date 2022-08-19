import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { UserFromToken } from './components/auth/actions';

const token = localStorage.getItem("token");
if (token) {
  try {
    UserFromToken(token, store.dispatch);
  }
  catch (ex) { localStorage.removeItem("token") };
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);