import React, { lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import ErrorPage from "./components/Error";
// import Contact from "./components/Contact";
const Contact = lazy(() => import("./components/Contact"));
import Instamart from "./components/Instamart";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// Route configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

// Entry Point
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
