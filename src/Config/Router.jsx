import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Screens/Dashboard";
import Admins from "../Screens/Admin/Index";

export const router = createBrowserRouter([
  {
    path: "/", // Define the base path
    element: <div>dsdsd</div>, // Render the Login component at the base path
  },
  {
    path: "/dashboard", // Define the relative path for the Dashboard
    element: <Dashboard />, // Render the Dashboard component
    children:[
        {
            path:"/dashboard/admins",
            element:<Admins/>
        }
    ]
  },

]);
