import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ThirdPage from './component/ThirdPage.jsx'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element = {<App/>}/>
    <Route path='video' element = {<ThirdPage/>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={route}/>
  </React.StrictMode>,
)
