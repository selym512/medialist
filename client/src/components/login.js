import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';




const Login = () => {

    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState([]);


    const user = function (e){
        setuserName(e.target.value);
    }
    const pass = function (e){
        setPassword(e.target.value);
    }
    const submit = function (){
        console.log("user: ", userName, " password: ", password);
          console.log('loggin in!!!!!!!!');
          fetch('http://localhost:5001/api/login')
          .then(res => res.json())
          .then(blah => {
              console.log('fetched', blah)
              setLogin(blah);
          });
        console.log(login);
    
    }


  return (
    <>
    <Form onSubmit={(e) => {submit(); e.preventDefault();}}>
        <Form.Group className="mb-3" id="email" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input type="email" value={userName} onChange={(e) => user(e)} id="exampleFormControlInput1" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input type="password" value={password} onChange={(e) => pass(e)} id="exampleFormControlInput1" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
    </Form>
    </>
  )
};

export default Login;
