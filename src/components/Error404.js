import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Error404 = () => {
    const [switchingPage, setSwitchingPage] = useState(false);

    const navigate = useNavigate();

    const goToLogIn = () => {
        setSwitchingPage(!switchingPage);
        setTimeout(() => {
            navigate("/login");
        }, 1000);
        
    }

    return (
        switchingPage
        ? <div className="loading"></div>
        : 
        <div>
            <NavBar />
            <div className="poll">
                <h1 
                    data-testid="error-title"
                    style={{color:"red"}}
                >Error 404</h1>
                <h3>Route not found. Please log in.</h3>
                <button data-testid="btn" onClick={goToLogIn}>Go to Log In</button>
            </div> 
        </div>
        
    )
}

export default Error404;