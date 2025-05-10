import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import RootLayout from "./components/RootLayout";
import CreateAccount from "./components/SignUp";
import Login from "./components/Login";
import Projects from "./components/Projects";
import User from "./components/Users";
import AddUser from "./components/AddUser";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";


function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <><NavBar /><p>404: page not found</p></>,
        children: [
          {path: '', element: <Home />},
          {path: 'create-account', element: <CreateAccount />},
          {path: 'login', element: <Login />},
          {path: "/contact", element: <ContactUs />},
          {path: "/about", element: <AboutUs />}
        ]
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/users",
        element: <User />
      },
      {
        path: "/add-user",
        element: <AddUser />
      },
      {
        path: "/new-project",
        element: <NewProject />
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />
      },
    ]);



    return (
      <RouterProvider router={router} />
    )
}

export default App;