import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Nav'
import Users from './Users'
import UserCreate from './UserCreate'
import UserUpdate from './UserUpdate'


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Users />} />
        <Route exact path='/create' element={<UserCreate />} />
        <Route exact path='/update/:id' element={<UserUpdate />} />

      </Routes>
    </Router>
  );
}