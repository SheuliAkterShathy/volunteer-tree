import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout";
import EventDetails from "../components/EventDetails";
import Events from "../components/Events";
import Home from "../components/Home";
import Main from "../components/Main";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Contributes from "../components/Contributes";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home />,
              },
            {
                path: '/signup',
                element: <SignUp />,
              },
            {
                path: '/login',
                element: <Login/>,
              },
            {
                path: '/events',
                element: <Events />,
                loader:()=>fetch('http://localhost:5000/events')

              },
              {
                path: '/events/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/events/${params.id}`)
              },
              {
                path: '/contributes',
                element: <PrivateRoute><Contributes/></PrivateRoute>,
              },
        ]
    }
])
export default router;