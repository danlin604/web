import React from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

export const Page404 = () => <Big404>404</Big404>

export const NoMatch = () => (
  <React.Fragment>
    <Redirect to="/404" />
  </React.Fragment>
)

const Big404 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  color: palevioletred;
`
