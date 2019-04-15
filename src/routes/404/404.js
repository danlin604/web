import React from 'react'
import { Redirect } from 'react-router-dom'

export const Page404 = () => (
  <div>
    <h3>
      404 - No match
    </h3>
  </div>
)

export const NoMatch = () => (
  <React.Fragment>
    <Redirect to="/404" />
  </React.Fragment>
)
