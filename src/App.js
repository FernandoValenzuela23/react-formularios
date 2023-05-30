import logo from './logo.svg';
import './App.css';
import { FormComponent } from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        
        <br />
        <FormComponent />
        



      </header>
    </div>
  );
}

export default App;
