
//useState is for Hooks and useEffect is for the lifecycle functions
import React, {useState, useEffect} from 'react';


import "./Register.css";

const Register = () => {

    //As I do not have a state here as on class components...I create my hook for the state
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    //Hook for the error message...
    const [msgError, setMsgError] = useState("");

    //Handlers...

    const handleData = (e) => {
        //In this case, we are creating a handler to bind inputs on a functional component
        setUser({...user, [e.target.name]: e.target.value})
                            
    };

    //Functions....

    const registerMe = () => {

        setMsgError("");

        //We validate the actual data on inputs/hooks

        //Text only
        if (! /[a-z]/gi.test(user.name) ) {
            setMsgError("Invalid name");
            return;
        };
        
        if (! /[\d()+-]/g.test(user.phone) ) {
            setMsgError("Invalid phone");
            return;
        };

        if (! /[\d()+-]/g.test(user.password) ) {
            setMsgError("Invalid password");
            return;
        };

        //Email
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email) ) {
            
            setMsgError("Invalid e-mail format");
            
            return;
        };
        
        //We would send the data to the backend using axios (for example)

        console.log("we did it, now we send data to the backend...");
    }

    return (
        <div className='registerDesign'>
            {/* {<pre>{JSON.stringify(user, null,2)}</pre>} */}
            <div className="upSection">
                <input className="myInput" type="text" name="name" id="name" title="name"
                    placeholder="Name:" autoComplete="off"
                    onChange={(e) => { handleData(e) }} />

                <input className="myInput" type="email" name="email" id="email" title="email"
                    placeholder="E-mail:" autoComplete="off"
                    onChange={(e) => { handleData(e) }} />
            </div>
            <div className="downSection">
                <input className="myInput" type="text" name="phone" id="phone" title="phone"
                    placeholder="Phone:" autoComplete="off"
                    onChange={(e) => { handleData(e) }} />

                <input className="myInput" type="password" name="password" id="password" title="password"
                    placeholder="Password:" autoComplete="off"
                    onChange={(e) => { handleData(e) }} />
            </div>
            <div className="bottomSection">
                <div className="designRegisterButton" onClick={()=>registerMe()}>Register</div>
                <div>{msgError}</div>
            </div>
        </div>
    )
}
export default Register;