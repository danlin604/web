import React from 'react'
import styled from 'styled-components'

export const Contact = () => {
  return (
    <Layout>
      <Content />
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
  height: 100%;
  width: 100%;
`
