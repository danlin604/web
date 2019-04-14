import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <Layout>
      <NavLink
        activeStyle={{ textDecoration: 'underline' }}
        to='/resume'>résumé</NavLink>
      <NavLink
        activeStyle={{ textDecoration: 'underline' }}
        to='/projects'>projects</NavLink>
      <NavLink
        activeStyle={{ textDecoration: 'underline' }}
        to='/contact'>contact</NavLink>
    </Layout>
  )
}

const Layout = styled.nav`
  height: 32px;
  /* border-style: dotted;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: space-between;

  a {
    padding: 8px;
    font-size: 16px;
    color: rgba(0,0,0,0.8);
    text-decoration: none;
    /* cursor: hand; */
  }
`