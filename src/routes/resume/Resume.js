import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import md from './Resume.md'
import { StyleWrapper } from './StyleWrapper'

export const Resume = () => {
  return (
    <Layout>
      <Content>
        <StyleWrapper>
          <ReactMarkdown source={md} />
        </StyleWrapper>
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
  margin: 16px;
`
