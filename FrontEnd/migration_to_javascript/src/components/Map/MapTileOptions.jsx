import { mapTiles } from "./mapTiles"

function MapTileOptions( { changeTile, setOpen } ) {

    const onSelectTile = (e) => {
        const tileSelect = e.target.id
        changeTile( tileSelect )
        setOpen(false)
    }
    
    return(
        <ul style = { {top: "25px"} }>
            <li><a id="default" onClick = {onSelectTile} > { mapTiles.default.name}</a></li>
            <li><a id="imagery" onClick = {onSelectTile} > { mapTiles.imagery.name}</a></li>
            <li><a id="positron" onClick = {onSelectTile} > { mapTiles.positron.name}</a></li>
        </ul>
    )
}

export { MapTileOptions }