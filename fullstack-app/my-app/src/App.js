import React, { useState } from 'react';
import axios from 'axios';
import WelcomePage from './Welcome';
import './App.css';
import { useNavigate, Route, Routes } from 'react-router-dom';

function App(props) {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000', {username, password})
    .then((response) => {
      console.log(response);
      navigate('/welcome');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleUsernameChanege = (event) => {
    setUsername(event.target.value)
  };

  const handlePasswordChanege = (event) => {
    setPassword(event.target.value)
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<WelcomePage {...props} username={username}/>}/>
        <Route path="/" element={<h1>Welcome to the game!</h1>}/>
      </Routes>
      <form onSubmit={handleSubmit} action="/welcome">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChanege}/>
        </label>
        <br/>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChanege}/>
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

/*
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function WelcomePage({ username }) {
  return (
    <div className="WelcomePage">
      <h1>Welcome to the Game!</h1>
      <h2>{`Welcome, ${username}!`}</h2>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000', { username, password })
      .then((response) => {
        console.log(response);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  if (isLoggedIn) {
    return <WelcomePage username={username} />;
  }

  return (
    <div className="App">
      <h1>Welcome to the Game!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
*/