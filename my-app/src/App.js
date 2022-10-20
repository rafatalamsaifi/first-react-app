import React from "react";
import Button from "./Component/Button/Button"
import Navbar from "./Component/Navbar/Navbar"
import "./App.css"

const App = () => {
  return (<div>
    <Navbar />
    <Button incrementBy={1} >Button1</Button>
    <Button incrementBy={15} >Button2</Button>
    <Button incrementBy={40} >Button3</Button>
  </div>
  )
}

export default App
