import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"


const MyFirstComponent = () => {
  return(
    <App />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyFirstComponent />) 
