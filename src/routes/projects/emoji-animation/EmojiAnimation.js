import React from 'react'
import styled from 'styled-components'

export class EmojiAnimation extends React.Component {
  state = {
    phase: 0,
  }

  componentDidMount = () => {
    this.interval = this.cycle()
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  cycle = () => {
    return setInterval(() => {
      const { phase } = this.state
      this.setState({
        phase: (phase + 1) % moon.length,
      })
    }, 100)
  }

  render() {
    const { phase } = this.state

    return <Layout>{moon[phase]}</Layout>
  }
}

const moon = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔']

const Layout = styled.section`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 64px;

  background-color: lightgrey;
`
