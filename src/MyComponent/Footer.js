import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Footer = () => {
  // let footerStyle = {
  //   position: "relative",
  //   top: "70vh",
  //   width: "100%"
  // }
  return (
    <footer className='bg-dark text-light py-2' >
    <p className='text-center'>Copyright &copy; MyTodosList.com</p>
      
   </footer>
  )
}

export default Footer
