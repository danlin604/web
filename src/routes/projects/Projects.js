import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { EmojiAnimation } from './emoji-animation/EmojiAnimation'
import { Stars } from './carl-sagan/Stars'

export const Projects = () => {
  return (
    <Layout>
      <Tile>
        <EmojiAnimation />
      </Tile>

      <Tile>
        <Stars />
      </Tile>

      <Tile>
        <NavLink
          activeStyle={{ textDecoration: 'underline' }}
          to="/solar-system"
        >
          <SolarSystemTileContent>Solar System</SolarSystemTileContent>
        </NavLink>
      </Tile>

      <Tile />
      <Tile />
    </Layout>
  )
}

const Layout = styled.section`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Tile = styled.article`
  height: 192px;
  width: 192px;
  border-radius: 16px;
  margin: 16px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    outline: none;
  }
`

const SolarSystemTileContent = styled.section`
  margin: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffeb3b;
  font-weight: 800;
  color: #343d46;
  font-size: 2rem;
`
