import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    // <Router>
    //   <div className='container'>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" exact element={<ExercisesList />}></Route>
    //     <Route path="/edit/:id" element={<EditExercise />}></Route>
    //     <Route path="/create" element={<CreateExercise />}></Route>
    //     <Route path="/user" element={<CreateUser />}></Route>
    //   </Routes>
    //   </div>
    // </Router>
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
