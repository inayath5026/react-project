import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import About from "./Components/About.jsx";
import Error from "./Components/Error.jsx";
import Contact from "./Components/Contact.jsx";
import Restaurant from "./Components/Restaurant.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


let App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/res/:id",
        element: <Restaurant/>,
      }
    ],
    errorElement: <Error/>
  }
],
{
  future: { v7_relativeSplatPath: true },
}
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
