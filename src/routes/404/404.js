import React from 'react'
import { Redirect } from "react-router-dom";

export const Page404 = ({ location }) => (
  <div>
    <h3>
      404 - No match for <code>{location.pathname}</code>
    </h3>
  </div>
)

export const NoMatch = ({ location }) => (
  <React.Fragment>
    <Redirect to="/404" />
  </React.Fragment>
)