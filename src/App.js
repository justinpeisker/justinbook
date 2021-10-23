import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Users from './Components/Users';
import Home from './Components/Home Page';
import { Route, Link } from 'react-router-dom';

const admin = {
  location: {
    state: 'California',
  },
  login: {
    uuid: '12345'
  },
  picture: {
    medium:'https://avatars.githubusercontent.com/u/87906218?v=4',
  },
  name: {
    first:'Justin Peisker'
  },
  email: 'j@j.com'
}



function App() {

  const [users, setUsers] = useState([admin ])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
    .then(res => {
      console.log(res);
      setUsers([...users, ...res.data.results]);
    }).catch(err => {
      console.error(err);
    })
  }, [])  

  return (
    <div className="App">
      <header>
        <nav>
           <Link to= '/'>Home</Link>
           <Link to= '/users'>Friends</Link>
        </nav>
      </header>
      <Route path ='/users'>
        <Users users= {users}/>   
      </Route>
      <Route exact path= '/'>
        <Home />
      </Route>
      
      
    </div>
  );
}

export default App;
