import React from 'react';
import { useState } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/footer';
import Events from './components/eventList';
//imported all the necessary things as well as my 
//components

//in this app function i used usestate to create variables
//i also used many if statements to display the sign in or register forms
//i used fetch functions to create a login for a normal end user and that stores the information
//in the db
//i also have a get function to read the login details that the user enters and
//checks to see if that user is in the db and then from that i set token as that users token
//and use it as props in my events component as well as that users information
//once the user signs in it displays my events component
function App() {
  const [signInButton, setSignInButton] = useState(true)
  const [signInForm, setSignInForm] = useState(false)
  const [registerForm, setRegisterForm] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setpassword] = useState('')
  const [admin, setAdmin] = useState(false)
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [token, setToken] = useState();
    

  function openSignInForm(){
    setSignInForm(true)
  }

  function openRegisterForm(){
    setRegisterForm(true)
    setSignInForm(false)
  }

  function closeRegisterForm(){
    setRegisterForm(false);
  }

  function closeSignInForm(){
    setRegisterForm(false);
    setSignInForm(false)
  }

  async function signIn(e){
    e.preventDefault()
    
    let login = {
      username: username,
      password: password,
    }
    await fetch('http://localhost:8080/getLogin', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(login)
    }).then(
      async response => await response.json()
    )
    .then(
      data => {setUser(data)
        if(data){
          setSignInButton(false)
          setSignInForm(false)
        }
        else{
          alert("Sign in failed, try clicking sign in again")
        }
        setIsAdmin(data.admin)
        setToken(data.token)}
    )
    console.log(user)
    
  }

  function register(e){
    e.preventDefault()
    let login = {
        username: username,
        password: password,
        admin: admin        
    }
    fetch('http://localhost:8080/createLogin', {
    method: "POST",
    headers: {            
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login)
    }).then(
      response => response.json()
    );
    console.log('registered')
    setRegisterForm(false);
  }

  return (
    <div className="App">
      <Header/><br/>
      <div>
        {(signInButton == true) ? (
          <>
            <h2 className='secondaryHeading'>Want to see upcoming events?</h2>
            <h3 className='thirdHeading'>Sign in now and take a look</h3>
            <Button className='Button' onClick={openSignInForm}>Sign In</Button><br /><br />
          </>
        ) : ""}

        {(signInForm === true) ? (
        <>
          <div className='signInContainer'>
            <form >
              <br/>
              <h4 className='secondaryHeading'>Enter sign in information</h4><br/>
              <input  className='secondaryHeading' placeholder='Username...' onChange={e => setUsername(e.target.value)}/><br/><br/>
              <input  className='secondaryHeading' placeholder='Password...' onChange={e => setpassword(e.target.value)}/><br/><br/>
              <Button className='Button' onClick={signIn}>Submit</Button>
              <Button className='Button' onClick={closeSignInForm}>Close</Button><br/><br/>
              <label className='secondaryHeading'>Need to Register?</label><br/><br/>
              <Button className='Button' onClick={openRegisterForm}>Register</Button><br/><br/>
            </form>
          </div>
        </>
        ) : ""}

        {(registerForm === true) ? (
        <>
          <div className='signInContainer'>
            <form >
              <br/>
              <h4 className='secondaryHeading'>Enter information to register</h4><br/>
              <input  className='secondaryHeading' placeholder='Username...' onChange={e => setUsername(e.target.value)}/><br/><br/>
              <input  className='secondaryHeading' placeholder='Password...' onChange={e => setpassword(e.target.value)}/><br/><br/>
              <Button className='Button' onClick={register}>Submit</Button>
              <Button className='Button' onClick={closeRegisterForm}>Close</Button><br/><br/>
            </form>
          </div>
        </>
        ) : ""}

        {(signInButton == false) ? (
          <><Events isAdmin={isAdmin} token={token} /></>
        ) : ""}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <Footer/>
    </div>
    
    
  );
}

export default App;
