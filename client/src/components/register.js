import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
// import Cookie from 'react-native-cookie';




const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    // const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);


    const user = function (e){
        setEmail(e.target.value);
    }
    const pass = function (e){
        setPassword(e.target.value);
    }
    const submit = async function (){
        console.log("email: ", email, " password: ", password);
          console.log('registering account!!!!!!!!');
          fetch('http://localhost:5001/api/members', {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email : email, 
              password : password})
          })
          .then(res => res.json())
          .then(blah => {
            console.log("what we gettin back: " + JSON.stringify(blah));
            if(!blah.msg){
              window.location.assign('/');
            }
            else{
              setError(blah.msg);
            }
              
          });
    
    }


  return (
    <>
    <h3>Create an account!</h3>
    <Form onSubmit={(e) => {submit(); e.preventDefault();}}>
        <p className="red">{error}</p>
        <Form.Group className="mb-3" id="email" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input type="email" value={email} onChange={(e) => user(e)} id="exampleFormControlInput1" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input type="password" value={password} onChange={(e) => pass(e)} id="exampleFormControlInput1" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Register
        </Button>
    </Form>
    </>
  )
};

export default Register;
