import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ThirdPage from './component/ThirdPage.jsx'
// import VideoPlayer from './component/VideoPlayer.jsx'
import { VideoContext } from './context/VideoContext.js';

 const VideoProvider = ({ children }) => {
  const [videoSrc, setVideoSrc] = useState('');

  return (
    <VideoContext.Provider value={{ videoSrc, setVideoSrc }}>
      {children}
    </VideoContext.Provider>
  );
};

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
  <VideoProvider>
  <RouterProvider router={route} />
</VideoProvider>
  </React.StrictMode>,
)
