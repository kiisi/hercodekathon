import './App.css'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import SuccessStoriesVideos from './pages/SuccessStoriesVideos';
import Sponsor from './pages/Sponsor';
import Hercodekathon from './pages/Hercodekathon';
import Coaching from './pages/Coaching';
import Events from './pages/Events';
import Programme from './pages/Programme';
import About from './pages/About';
import SuccessStoriesRead from './pages/SuccessStoriesRead';
import ParentSubmit from './pages/ParentSubmit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "success-stories-videos",
    element: <SuccessStoriesVideos/>,
  },
  {
    path: "success-stories-read",
    element: <SuccessStoriesRead/>,
  },
  {
    path: "sponsor",
    element: <Sponsor/>,
  },
  {
    path: "hercodekathon",
    element: <Hercodekathon/>,
  },
  {
    path: "coaching",
    element: <Coaching/>,
  },
  {
    path: "events",
    element: <Events/>,
  },
  {
    path: "programme",
    element: <Programme/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "success-stories-read",
    element: <SuccessStoriesRead/>,
  },
  {
    path:'parent-submit',
    element: <ParentSubmit/>
  }
]);

export default function App(){
  return <RouterProvider router={router} />
}
