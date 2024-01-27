import React from "react";
import { createRoot } from 'react-dom/client';
import { Header } from "./componets/header/header";
// import { Main } from "./componets/main/main";
import { Search } from "./componets/search/search";
import { List } from "./componets/list/list";
import './main.css';



const App = () => {
    return ( 
        <>
        <Header/>
        <main className='site-main'>
        <section className='hero'>
        <div className="container">
        <h1 className="visually-hidden">Country flag</h1>
        <h2 className="visually-hidden">Country flag list</h2> 
        <Search/>
        <List/>
        </div>
        </section>
        
        </main>
        
        
        
        
        </> 
        );
    };
    
    const root = createRoot(document.getElementById('root')).render(<App/>)
    
    // const elButton = document.querySelector("#icon");
    //     elButton.addEventListener("click", function() {
    //         document.body.classList.toggle("dark") 
    //     })