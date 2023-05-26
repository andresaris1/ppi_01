import { TbMotorbike } from "react-icons/tb";
import { GiPathDistance } from "react-icons/gi";
import { RiParkingFill } from "react-icons/ri";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { SwithControl } from "../Map/SwitchControl";
import { AddReviewControl } from "../Map/AddReviewControl";
import { LocateUserControl } from "../Map/LocateUserControl";



export function FullSidebar( props ){

    const handleHideSidebar = () => {
        props.setShowSidebar(false)
    }

    console.log(props)

 

    return(
        <div className="flex flex-row h-full">
            <nav onMouseLeave = {handleHideSidebar}  className="bg-gray-900 opacity-95 w-56 justify-between flex flex-col z-[9999]">
                <div className="mt-10 mb-10">
                <div className="mt-10">
                    <ul>
                    <li className="mb-6 flex flex-row justify-end">
                        <span>
                            <TbMotorbike className="text-white text-xl ml-4 mr-auto"/>
                        </span>
                        <SwithControl 
                            name = {"Encicla"}
                            show = {props.showEstations}
                            onToggle = {props.setShowStations}
                        />
                    </li>
                    <li className="mb-6 flex flex-row justify-end">
                        <span>
                            <TbMessageCircle className="text-white text-xl ml-4 mr-auto"/>
                        </span>
                        <SwithControl 
                            name={"Reseñas"}
                            show = {props.showReviews}
                            onToggle = {props.setShowReviews}            
                        />
                    </li>
                    <li className="mb-6 flex flex-row justify-end">
                        <span>
                            <GiPathDistance className="text-white text-xl ml-4 mr-auto"/>
                        </span>
                        <SwithControl 
                            name={"Ciclo rutas"}
                            show = {props.showBikeways}
                            onToggle = {props.setShowBikeWays}            
                        />
                    </li>
                    <li className="mb-6 flex flex-row justify-end">
                        <span>
                            <RiParkingFill className="text-white text-xl ml-4 mr-auto"/>
                        </span>
                        <SwithControl 
                            name={"Biciparqueaderos"}
                            show = {props.showParking}
                            onToggle = {props.setShowParking}            
                        />
                    </li>
                    <li className="mb-6 flex flex-row">
                        <span>
                            <BiMessageRoundedAdd className="text-white text-xl ml-4 mr-auto"/>
                        </span>
                        <AddReviewControl
                            reviewMode = { props.reviewMode } 
                            setReviewMode = { props.setReviewMode } 
                        />
                    </li>
                    <li className="mb-6 flex flex-row">
                        <span>
                            <BiCurrentLocation className="text-white text-xl ml-4 mr-auto"/>
                        </span>
                        <LocateUserControl  
                        userPosition = {props.userPosition}
                        />
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}