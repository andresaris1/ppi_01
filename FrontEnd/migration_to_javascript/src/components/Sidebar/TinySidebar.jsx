
import { TbMotorbike } from "react-icons/tb";
import { GiPathDistance } from "react-icons/gi";
import { RiParkingFill } from "react-icons/ri";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";

export function TinySidebar({ setShowSidebar }){

    const handleMouseOver = (e) => {
      setShowSidebar(true)
    }    

    return(
    <div className="flex flex-row h-full">
      <nav onMouseEnter = {handleMouseOver}  className="bg-gray-900 w-14 justify-between flex flex-col z-[9999]">
        <div className="mt-10 mb-10">
          <div className="mt-10">
            <ul>
              <li className="mb-6">
                <span>
                  <TbMotorbike className="text-white text-xl mx-auto"/>
                </span>
              </li>
              <li className="mb-6">
                  <span>
                    <TbMessageCircle className="text-white text-xl mx-auto"/>
                  </span>
              </li>
              <li className="mb-6">
                  <span>
                    <GiPathDistance className="text-white text-2xl mx-auto"/>
                  </span>
              </li>
              <li className="mb-6">
                  <span>
                    <RiParkingFill className="text-white text-xl mx-auto"/>
                  </span>
              </li>
              <li className="mb-6">
                  <span>
                    <BiMessageRoundedAdd className="text-white text-xl mx-auto"/>
                  </span>
              </li>
              <li className="mb-6">
                  <span>
                    <BiCurrentLocation className="text-white text-xl mx-auto"/>
                  </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}