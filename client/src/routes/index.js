import { createBrowserRouter, Navigate } from "react-router-dom";

import Dashboard from "../components/Dashboard";
//import Home from "../components/Home";
import PrivateRoute from "../components/Guards/PrivateGuard";
import PublicRoute from "../components/Guards/PublicGuard";
import Profile from "../components/Profile";
import AppLayout from "../pages/AppLayout";
import Login from "../pages/LoginForm";
import Lost from "../pages/Lost";
import Signup from "../pages/SignupForm";
import ForgotPass from "../pages/ForgotPassForm";
import ResetPass from "../pages/ResetPassForm";
import Personalitytest from "../components/Personalitytest";
import Personalityreport from "../components/Personalityreport";
import Matching from "../components/Matching";
import Profiling from "../components/Profiling";
import Recommendation from "../components/Recomandation";

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <PublicRoute />,
        children: [
          { path: "", element: <Login /> },
          { path: "/login", element: <Login /> },
          { path: "/signup", element: <Signup /> },
          { path: "/recoverpass", element: <ForgotPass /> },
          { path: "/change-pass/:resetToken", element: <ResetPass /> },
        ],
      },
      {
        path: "/dash",
        element: <PrivateRoute />,
        children: [
          { path: "", element: <Dashboard /> },
          { path: "profile", element: <Profile /> },
          { path: "starting_page", element: <Personalitytest /> },
          { path: "catalyst_report", element: <Personalityreport /> },
          { path: "matching_page", element: <Matching /> },
          { path: "catalyst_profiling", element: <Profiling /> },
          { path: "advice", element: <Recommendation /> },
          
        ],
      },
      { path: "404", element: <Lost /> },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
]);

export { router };
