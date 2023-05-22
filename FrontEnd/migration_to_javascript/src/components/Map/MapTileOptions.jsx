import { mapTiles } from "./mapTiles"

function MapTileOptions( { changeTile, setOpen, tile } ) {
    console.log(tile)
    const onSelectTile = (e) => {
        const optionSelected = e.target
        changeTile( optionSelected.id )
        setOpen(false)
    }
    
    return(
        <ul style = { {top: "25px"} }>
            <li><a  className={`${tile === "default" ? 'dd_item_selected' : ''}`} 
                    id="default" 
                    onClick = {onSelectTile} > { mapTiles.default.name}
                </a>
            </li>
            <li><a className={`${tile === "imagery" ? 'dd_item_selected' : ''}`} 
                   id="imagery" 
                   onClick = {onSelectTile} > { mapTiles.imagery.name}
                </a>
            </li>
            <li><a className={`${tile === "positron" ? 'dd_item_selected' : ''}`} 
                   id="positron" 
                   onClick = {onSelectTile} > { mapTiles.positron.name}
                </a>
            </li>
        </ul>
    )
}

export { MapTileOptions }