import { useState, useEffect } from "react"


export const ResturantMenu=()=>{
    const fetchResturantInfo=async ()=>{

        const responce=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4385553&lng=79.1288412&restaurantId=");
        const restaurantResponce=await responce.json();
        console.log(resturnatResponce);
    }
    useEffect(()=>{fetchResturantInfo()},[])
    return (
        <>
        {/*resturnat info*/}
        <div className="menu">
            <h1>Resturnat name</h1>
            <h2></h2>
            <ul>
            <li>hello</li>
            </ul>
        </div>
        </>
    )
}