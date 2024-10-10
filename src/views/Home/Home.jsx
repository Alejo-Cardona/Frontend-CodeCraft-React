import React from "react";
import styles from "./Home.css"

function Home() {
    return (
        <>  
            <header>
                <div className="d-flex align-items-center justify-content-center name-logo mt-5">
                    <img className="logo-img" src="/media/imgCodeCraft/codecraft_img.png" alt="" />
                    <h1 className="text-center mt-5 principal-title">CodeCraft</h1>
                </div>
                <h2 className="text-center mt-5 header-title"> Develop into a</h2>
                <h2 className="text-center header-title"> true <span className="highlighted-text">professional</span></h2>
            </header>
        </>
    )
}

export default Home;