import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import {Body }from "./components/Body";
import {AboutUs} from "./components/aboutUs";
import { Error } from "./components/Error";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import { ResturantMenu } from "./components/Resturantmenu";


function AppLayout(){
  return (
    <>
      <Header/>
      <Outlet/> 
    </>
  );
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {   path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/",
                element:<Body/>
            }

        ],
        errorElement:<Error/>
    },
    {
        path:"/resturant/:resid",
        element:<ResturantMenu/>
    }
    
]) 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);