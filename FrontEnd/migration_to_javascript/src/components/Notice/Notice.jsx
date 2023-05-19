import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

function Notice({ content, type, showHandler, showTime = 3}){

    const [ active, setActive ] = useState( true )
    const mileSec = showTime * 1000
    useEffect( ()=> {

        setTimeout( ()=> {
            setActive( false )
            showHandler( {show : false, content : '', type : ''} )
        }, mileSec )

    }, [])

    let noticeType = '' 

    switch ( type ){
        case 'info':
            noticeType = 'info_notice'
            break
        case 'warning':
            noticeType = 'warning_notice'
            break
        case 'success':
            noticeType = 'success_notice'
            break
        case 'error':
            noticeType = 'error_notice'
            break      
    }

    return(
        active &&
        ReactDOM.createPortal(
        <div 
            className = { `notice_container ${ noticeType }` } >
            <p>{ content }</p>
        </div>
        , document.getElementById( 'notice' ))
    )
}
export { Notice }