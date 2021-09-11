import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import Cookies from 'js-cookie';





const Login = () => {

    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');


    const user = function (e){
        setuserName(e.target.value);
    }
    const pass = function (e){
        setPassword(e.target.value);
    }
    const logout = function(){
      Cookies.remove('jwt');
      Cookies.remove('id');
      window.location.assign('/login');
    }
    const submit = async function (){
        console.log("user: ", userName, " password: ", password);
          console.log('loggin in!!!!!!!!');
          fetch('/api/login', {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email : userName, 
              password : password})
          })
          .then(res => res.json())
          .then(blah => {
              if(blah.msg === "logged in"){
                console.log(blah.msg);
                console.log(blah.Cookies);
                window.location.assign('/');
              }
              else{
                setLogin(blah.msg);
              }
          })
          .catch(() => {
            console.log("something is going wrong!");
          });
    
    }


  return (
    <>
    { Cookies.get("jwt") ? 
    <>
      <div className="center">
      <h5>You are logged in already, would you like to logout?</h5>
      <Button onClick={logout}>logout</Button>
      </div>
    </>
  
    : 
    <>
      <div className="center">
      <h3>Login to your account</h3>
      <h5>You are not logged in, you need to log in or register</h5>
      <Form onSubmit={(e) => {submit(); e.preventDefault();}}>
          <p>{login}</p>
          <Form.Group className="mb-3" id="email" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <input type="email" value={userName} onChange={(e) => user(e)} id="emailInput" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <input type="password" value={password} onChange={(e) => pass(e)} id="passwordInput" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
              Login
          </Button>
      </Form>
      </div>
    </>
  }
    </>
  
  )
};

export default Login;
