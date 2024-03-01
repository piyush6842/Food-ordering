import React from "react"
import ReactDOM from "react-dom/client"
import Header from './components/Header';
import Body from './components/Body';
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResMenu from "./components/ResMenu";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

  const currYear = new Date().getFullYear();

  const Footer = () => {
    return (
      <footer className="text-center w-auto h-auto">
        <p>
          Copyright &copy; {currYear}, Made with 💗 by <strong>Piyush</strong>
        </p>
      </footer>
    );
  };
  
  const AppLayout = () => {
    return (
      <Provider store={AppStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
      </Provider>
    );
  };

  const AppRouter = createBrowserRouter([
      {
        path    :"/",
        element :<AppLayout />,
        children:[
      {
        path     :"/",
        element  :<Body />,
      },
      {
        path     :"/about",
        element  :<AboutUs />,
      },
      {
        path     :"/contact",
        element  :<ContactUs />,
      },
      {
        path     :"/home",
        element  :<Home />,
      },
      {
        path   :"/cart",
        element:<Cart />,
      },
      {
        path   :"/restaurants/:resid",
        element:<ResMenu />,
      },
  ],
      errorElement : <ErrorPage />,
}
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />); 


