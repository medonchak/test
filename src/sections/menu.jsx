import React from 'react'
import {NavLink} from 'react-router-dom'
import './menu.scss'

const Menu =(props)=>{
        
    return <div>
            <div class="itemMenu"> 
                <NavLink class="link"  to="/section1"> 
                <img src="" alt=""/>
                <span>Seaction 1 </span>
                </NavLink>
            </div>
            <div class="itemMenu">
                <NavLink class="link"  to="/section2"> 
                <img src="" alt=""/>
                <span>Seaction 2 </span>
                </NavLink>
            </div>
            <div class="itemMenu">
                 <NavLink class="link"  to="/section3"> 
                <img src="" alt=""/>
                <span>Seaction 3 </span>
                </NavLink>
            </div>
    </div>

}
export default  Menu;