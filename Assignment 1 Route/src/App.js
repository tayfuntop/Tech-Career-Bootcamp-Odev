import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import About from "./components/About";
import Users from "./components/users/Users";
import Home from "./components/Home";
import User from "./components/users/User";
import Error404 from "./components/Error404"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>  { /* Switchi routes import ederek değiştirdik */}
          <Route path="/" element={<Home />} /> {/* v6 sürüm öncesinde exact ile home üste yazabiliriz */}
          <Route path="/about" element={<About />} /> {/* v6 da element eklemelisin */}
          <Route path="/users" element={<Users />}>
            <Route path="user/:id" element={<User />} />   {/* /:id useParamsta kullanilacak deger */}
          </Route> 
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
