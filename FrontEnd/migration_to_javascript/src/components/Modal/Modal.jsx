import ReactDOM from 'react-dom';
import '../../App.css';


function Modal( { children } ){

    return (
        ReactDOM.createPortal(
            <>
                {children}
            </>
           ,
            document.getElementById('modal')
        )
    )
}

export { Modal }