import { useInfo } from "../context/Info";

function Header() {

  const { number } = useInfo()

  return (
    <div className="header">
      <h1>Basic Calculator</h1>
      <div className="result">{number}</div>
    </div>
  )
}

export default Header