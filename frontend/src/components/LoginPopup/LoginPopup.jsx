import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("signup");
    // const [token, setToken] = useState(null);
    const {url,token,setToken}=useContext(StoreContext)
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event) => {
        event.preventDefault();
        let newUrl = url;
        if(currentState === "login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }
        const response = await axios.post(newUrl, data);
        if(response.data.success) {
            setToken(response.data.token);
            // setToken(localStorage.getItem("token"))
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
            toast.success(response.data.message)
        }
        // else if (currentState==="login"&&response.data.success){

        // }
        else {
            toast.error(response.data.message)
            // alert(response.data.message);
        }
    }
    
    

    
    return (
        <div className="login-popup" >
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />
                </div>
                <div className="login-popup-input">
                    {currentState === "login" ? (
                        <></>
                    ) : (
                        <input onChange={onChangeHandler} value={data.name} name="name" type="name" placeholder="Your name" required />
                    )}
                    <input onChange={onChangeHandler} name="email" value={data.email} type="email" placeholder="Your email" required />
                    <input onChange={onChangeHandler} name="password" value={data.password} type="password" placeholder="Password" required />
                    <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                </div>
                
               
                <button type="submit">
                    {currentState === "signup" ? "Create account" : "Login"}
                </button>
                {currentState == "login" ? (
                    <p>
                        Create a new account? <span onClick={()=>setCurrentState("signup")}>Click here</span>
                    </p>
                ) : (
                    <p>Already have an account? <span onClick={()=>setCurrentState("login")}>Login here</span></p>
                )}
                
            </form>
        </div>
    );
};

export default LoginPopup;
