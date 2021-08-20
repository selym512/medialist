import './App.css';
import About from './components/about';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Header from './components/navbars/header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {
  return (

    
    <Router>
    <Header/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
         <Dashboard/>
        </Route>
      </Switch>
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
