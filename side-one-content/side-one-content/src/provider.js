import React, {useState} from "react";

import PackageContext from "./context"  //we can give any name

const Provider = props =>{
    const [mission, setMission] = useState({
        mname: "Go to Russia",
        agent: "007",
        accept: "Not accepted"
    })   //we want this information to be accessed by anyone, who is using our provider

    return(
        <PackageContext.Provider 
        value={{
            data:mission, 
            isMissionAccepted: () => {
                setMission({...mission, accept:"Accepted"})  //load all the values of mission has ("...mission")
            }
        }}>
            {props.children}  
        </PackageContext.Provider>
    )
}

export default Provider;