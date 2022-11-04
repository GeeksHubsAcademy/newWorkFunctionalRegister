import React from 'react';
 
import './Home.css'
 
const Home = () => {

    // 1st  - When mounting or updating, FIRST, we take a look at the hooks.
 
    // useEffect(()=>{

        //This is executed ONLY when the component mounts for the first time
 
    // },[])
 
    // useEffect(()=>{

        //This is executed EVERY TIME there is an update. An update occurs when a HOOK changes.
 
    // },)
 
 
    //2nd - When mounting or updating, the second step consists on rendering and showing stuff on the DOM
    return (
        <div className='homeDesign'>HOME</div>
    )
}
export default Home;