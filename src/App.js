import React, { useState,useEffect } from 'react';
import CardList from './CardList';
import Search from './Search';
import './App.css';

export default function App() {
  const[robots,setRobots]=useState([]);
  const[searchField,setSearchField]=useState('');
  
        const onhandleChange=(robo)=>{
          setSearchField(robo);
        }
        useEffect(async() => {
          await fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setRobots(data))
            });
             const filteredRobo=robots.filter((robo) => robo.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div>
              <h1 id='heading'>ROBO PROJECT</h1>
            <Search onhandleChange={onhandleChange} value={searchField}/>
            <hr id='hr'/>
            <CardList robots={filteredRobo}/>
            </div>
    )
  }
























