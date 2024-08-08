import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import DogPage from './components/pages/DogPage.jsx'
import Home from './components/pages/Home.jsx'
import SignIn from './components/pages/SignIn.jsx'
import SignUp from './components/pages/SignUp.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : 
    [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "/about-dog/:id",
        element : <DogPage/>
      },
      {
        path : "/signIn",
        element : <SignIn/>
      },
      {
        path : "/signUp",
        element : <SignUp/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
