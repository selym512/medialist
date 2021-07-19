import logo from './logo.svg';
import './App.css';
import Accounts from './components/accounts';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Oi matey, good workin
        </p>
        <h1>USERS:</h1>
        <Accounts/>
      </header>
    </div>
  );
}

export default App;
