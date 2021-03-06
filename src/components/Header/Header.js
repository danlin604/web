import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Layout>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/resume">
        résumé
      </NavLink>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/projects">
        projects
      </NavLink>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/contact">
        contact
      </NavLink>
    </Layout>
  )
}

const Layout = styled.nav`
  height: 32px;
  display: flex;
  flex-direction: space-between;

  a {
    padding: 8px;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    outline: none;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }
`
