import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {

  return (
    <main className="App">
      
          <NavBar />
          <Switch>
            <Redirect to="/orders" />
          </Switch>
    </main>
  );
}