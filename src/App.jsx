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
]);

export default function App(){
  return <RouterProvider router={router} />
}
