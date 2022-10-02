import React from 'react'
import { useInfo } from "../../Context/Data"

function Header() {

    const { name } = useInfo();
    
  return (
    <div>Header {name}</div>
  )
}

export default Header