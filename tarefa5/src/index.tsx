import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from './components/ThemeContext';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
