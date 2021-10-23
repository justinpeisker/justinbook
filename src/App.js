import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const admin = {
  location: 'California',
  uuid: '12345',
  picture: 'https://avatars.githubusercontent.com/u/87906218?v=4',
  name: 'Justin Peisker',
  email: 'j@j.com'
}



function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
    .then(res => {
      // console.log(res);
      setUsers(res.data.results);
    }).catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="App">
     <h1>JustinBook</h1>
     <h2>Like Facebook but made by some guy named Justin</h2>
     <p>Comming Soon!</p>
    </div>
  );
}

export default App;
