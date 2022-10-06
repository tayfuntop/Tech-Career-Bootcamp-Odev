import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import Login from "../Container/User/Login/Login";
import Register from "../Container/User/Register/Register";

// import { useInfo } from "../../Context/Data"

function Header() {

  // const { name } = useInfo();



  return (
    <Router>
      <div className="header">
        <NavLink className="logo" to="/">
          HOME PAGE
        </NavLink>
        <div className="right-info">
          <NavLink className="right" to="/login">
            <Button variant="outline-light right">Log In</Button>
          </NavLink>
          <NavLink to="/register">
            <Button variant="outline-light right">Sign up</Button>
          </NavLink>
          <NavLink to="/">
            <div className="photo right">
              <img src="profile.jpeg" alt="" />
            </div>
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Container />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Header