<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
=======
import React, {useEffect, useState} from 'react';
>>>>>>> 613e6b4ee09c7412d37ecd8938f7aae41fc04252
import styled, {css} from 'styled-components/macro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Bars from '../images/Bars.svg';
import NavbarStyle from '../css/NavbarStyle.css';
<<<<<<< HEAD
=======
import Interior from './Interior';
import Homes from './Homes';
import Hero from './Hero';
>>>>>>> 613e6b4ee09c7412d37ecd8938f7aae41fc04252

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled.i`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }

 `;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    @media screen and (max-width: 768px){ display: none }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){ display: none }
`;

const Navbar = ({toggle}) => {

<<<<<<< HEAD
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {

=======
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY)
>>>>>>> 613e6b4ee09c7412d37ecd8938f7aae41fc04252
        if (window.scrollY >= 60) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      useEffect(() => {
<<<<<<< HEAD

        changeBackground()

        window.addEventListener("scroll", changeBackground)
      })

    return (
        <Nav className={navbar ? "navbar scroll" : "navbar"}>
            <Logo to=''>ELIXR</Logo>
=======
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })
    
    return (
        <Router>
        <Nav className={navbar ? "navbar scroll" : "navbar"}>
            <Logo to='/'>ELIXR</Logo>
>>>>>>> 613e6b4ee09c7412d37ecd8938f7aae41fc04252
            <MenuBars onClick={toggle}/>
            <NavMenu>
                    <NavMenuLinks to='#Interior' >About</NavMenuLinks>
                    <NavMenuLinks to='#Homes' >Homes</NavMenuLinks>
                    <NavMenuLinks to='#Hero' >Rentals</NavMenuLinks>
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary="true">Contact Us</Button>
            </NavBtn>
            <Switch>
                <Route path='/interior' component={Interior} />
                <Route path='/homes' component={Homes} />
                <Route path='/hero' component={Hero} />
            </Switch>
        </Nav>
        </Router>
    )
}

export default Navbar
