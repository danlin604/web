import React from 'react'
import styled from 'styled-components'

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
      <Tile />
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
`
