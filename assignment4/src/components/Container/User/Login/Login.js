import "./Login.css"
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <div className="login">
        <div className="info">
        <h1>Log In</h1>
        <label htmlFor="">Username</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
        <Button className="button" variant="outline-dark">Log In</Button>
        </div>
    </div>
  )
}

export default Login