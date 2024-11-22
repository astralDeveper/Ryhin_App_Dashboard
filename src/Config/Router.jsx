import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Screens/Dashboard";
import Admin from "../Screens/Admin/Index"
import TravelAgentLists from "../Screens/TravelAgentList/Index";
import { AgentDocuments } from "../Screens/AgentDocuments/Index";
import { Availability } from "../Screens/Availability/Index";
import UmmrahOffers from "../Screens/UmmrahOffers/Index";
import HolyDayOffers from "../Screens/HolyDayOffers/Index";
import SendNotifications from "../Screens/SendNotifications/Index";
import Reviews from "../Screens/Reviews/Index";
import Languages from "../Screens/Languages/Index";
import ContactUs from "../Screens/ContactUs/Index";

export const router = createBrowserRouter([
  {
    index: true,
    element: <div>dsdsd</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />, 
  },
  {
    path: "/admins",
    element: <Admin />,
  },
  {
    path: "/travel-agent-lists",
    element: <TravelAgentLists />,
  },
  {
    path: "/agent-documents",
    element: <AgentDocuments />,
  },
  {
    path: "/availability",
    element: <Availability />,
  },
  {
    path: "/umrah-offers-history",
    element: <UmmrahOffers />,
  },
  {
    path: "/holiday-offers-history",
    element: <HolyDayOffers />,
  },
  {
    path: "/send-notifications",
    element: <SendNotifications />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/language",
    element: <Languages />,
  },
  {
    path: "/Contact-us",
    element: <ContactUs />,
  },
  
]);
