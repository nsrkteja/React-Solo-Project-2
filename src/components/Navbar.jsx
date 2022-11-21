import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return (
        <nav>
            <FontAwesomeIcon icon={faEarthAmericas} />
            <p>my travel journal.</p>
        </nav>
    )
}

export default Navbar