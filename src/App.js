import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Resume } from './routes/resume/Resume'
import { Projects } from './routes/projects/Projects'
import { Contact } from './routes/contact/Contact'
import { NoMatch, Page404 } from './routes/404/404'

// Projects
import { SolarSystem } from './routes/projects/solar-system/SolarSystem'

export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Layout className="App">
          <Header />

          {/* Routes */}
          <Switch>
            <Route path="/" exact component={Resume} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            {/* Projects */}
            <Route path="/solar-system" component={SolarSystem} />
            <Route path="/404" component={Page404} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

// Set global defaults at root
const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
    font-weight: 500; // medium
  }
  
  html, body, main {
    font-weight: 400;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
`

const Layout = styled.section`
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`
