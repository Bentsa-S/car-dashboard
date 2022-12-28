import React from "react";
import module from './Header.module.css'

const Header = () =>{
    return(
        <div className={module.flex}>
            <div className={module.search}>
                <input className={module.inputSearch} type="text"/>
            </div>

            <div>
            </div>
        </div>
    )
}

export default Header;