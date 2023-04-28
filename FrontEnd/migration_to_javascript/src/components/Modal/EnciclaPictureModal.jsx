


function EnciclaPictureModal( { closeModal, station } ){

    return (
        <div className="modal"  >
            <figure className='station_picture'>
                <img src={ station?.picture } alt="Estación encicla" />
                <figcaption> { station?.description } </figcaption>
            </figure>

                <button className='close_box' 
                        onClick={() => closeModal(false)}
                > 
                X 
                </button>
        </div>
    )
}

export { EnciclaPictureModal }