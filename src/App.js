import React, { Suspense, lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./components/Header";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import userContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore.js";
import Cart from "./components/Cart.js";


const Grocery = lazy(() => import("./components/Grocery.js"));
const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      defaultUser: "Sudhish",
    };
    setUserName(data.defaultUser);
  }, []);
  return (
    <>
      <Provider store={Appstore}>
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
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
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path : "/cart",
        element : <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
