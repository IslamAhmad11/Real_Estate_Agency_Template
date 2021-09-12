import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components/macro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {menuData} from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/Bars.svg';
import NavbarStyle from '../css/NavbarStyle.css';
import Interior from './Interior';
import Homes from './Homes';
import Hero from './Hero';

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

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 60) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })
    
    return (
        <Router>
        <Nav className={navbar ? "navbar scroll" : "navbar"}>
            <Logo to='/'>ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
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
