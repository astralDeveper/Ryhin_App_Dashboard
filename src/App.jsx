import React from 'react'
// import Container from './Components/Container'
// import Dashboard from './Screens/Dashboard'
import { RouterProvider } from 'react-router-dom'
import { router } from './Config/router'

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App