import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
