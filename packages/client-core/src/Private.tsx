import React from 'react'
import { Route } from 'react-router-dom'

import Dashboard from './user/components/Dashboard'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Dashboard>
          <Component {...props} />
        </Dashboard>
      )}
    />
  )
}

export default PrivateRoute
