import React, { Component } from 'react'
import {Link} from "react-router-dom"
import logo from "../logo.svg"
import "../App.css"
import styled from "styled-components"
import {ButtonContainer} from "./Button"
export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               <Link to="/">
                   <img className="navbar-brand" src={logo} alt="store"/>
                </Link> 
                   <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link className="nav-link" to="/">Products</Link>
                        </li>
                   </ul>
                   <Link className="ml-auto" to="/cart">
                       <ButtonContainer>
                           <span className="mr-2">
                           <i className="fa fa-cart-plus"></i>
                           </span>
                           MyCart
                       </ButtonContainer>             
                   </Link>
           </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: #2a2a72;

`


