import "./Register.css"
import Button from 'react-bootstrap/Button';

function Register() {
  return (
    <div className="register">
        <div className="info">
        <h1>Sign Up</h1>
        <label htmlFor="">Username</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
        <Button className="button" variant="outline-dark">Create an account</Button>
        </div>
    </div>
  )
}

export default Register