import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import {Body }from "./components/Body";
import {AboutUs} from "./components/aboutUs";
import { Error } from "./components/Error";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import { RestaurantMenu } from "./components/ResInfo";


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
        element:<RestaurantMenu/>
    }
    
]) 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);