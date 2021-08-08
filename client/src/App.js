import './App.css';
import About from './components/about';
import Login from './components/login';
import Dashboard from './components/dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (

    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <Login />
        </Route>
        <Route path="/">
         <Dashboard/>
        </Route>
      </Switch>
    </div>
  </Router>


    // <div className="container">
    //   <header className="App-header">
    //     <h1>Login:</h1>
    //     <Accounts/>
    //     <Login/>
    //   </header>
    // </div>



  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
