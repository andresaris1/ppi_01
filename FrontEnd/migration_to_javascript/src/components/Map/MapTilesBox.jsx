import { DropDown } from "../Navbar/DropDown"
import { MapTileOptions } from "./MapTileOptions"

function MapTilesBox( { changeTile } ){

    return(
        <div className="tiles_box">
            <DropDown optionsConfig={ <MapTileOptions changeTile = { changeTile }  />}>
                <button className="tiles_btn"> Mapas </button>
            </DropDown>
            
        </div>
    )
}

export { MapTilesBox }