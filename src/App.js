import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Badge from './components/Badge';
import { Provider } from 'react-redux';
import store from './components/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Badge />
      <Card />
     
    </div>
    </Provider>
  );
}

export default App;
