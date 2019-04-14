import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import md from './Resume.md'

export const Resume = (props) => {
  return (
    <Layout>
      <Content>
        <ReactMarkdown source={md} />
      </Content>
    </Layout>
  )
}

const Layout = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Content = styled.article`
  margin: 32px;
  background-color: paleturquoise;
`