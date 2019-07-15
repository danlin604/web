import React from 'react'
import styled from 'styled-components'

export const Contact = () => {
  return (
    <Layout>
      <Content>
        <Card>
          <header>🖖</header>
          <section>
            <Label>
              <a href="https://github.com/danlin604">github</a>
            </Label>
            <Label>
              <a href="https://stackoverflow.com/users/6713596/dan?tab=profile">
                stackoverflow
              </a>
            </Label>
            <Label>
              <a href="https://www.linkedin.com/in/dan-yhl">linkedin</a>
            </Label>
          </section>
        </Card>
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

const Content = styled.section`
  margin: 16px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.article`
  padding: 16px;
  width: 320px;
  height: 450px;

  border: 1px solid #dadce0;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 450px) {
    width: 80%;
  }

  header {
    margin: 0;
    font-size: 64px;
  }

  section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const Label = styled.section`
  display: flex;
  justify-content: center;
  font-size: 32px;

  a {
    color: #263238;
    text-decoration: none;
  }
`
