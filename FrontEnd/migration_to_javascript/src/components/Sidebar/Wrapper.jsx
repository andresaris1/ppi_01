import { useState } from "react";

import { TinySidebar } from "./TinySidebar";
import { FullSidebar } from "./FullSidebar";

export function Wrapper(props){
    const [ showSidebar, setShowSidebar] = useState(false) 
    return(
        <div className="w-full h-full">
            { showSidebar ? 
            <FullSidebar  {...props} setShowSidebar = { setShowSidebar } /> :
            <TinySidebar setShowSidebar = { setShowSidebar }/> 
            }
        </div>
    )
}