import React from 'react'
import './Home.css'
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
function Home(){
    return(
            <div>
                <Header/>
                <ExploreMenu/>
            </div>
    )
}
export default Home