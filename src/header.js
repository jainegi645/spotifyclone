import React from 'react';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import { useDataLayerValue } from './datalayer';


function Header(){
    const [{user},dispatch] = useDataLayerValue();
    return( <div className="header">

    <div className="header__left">
    <SearchIcon/>
    <input
    placeholder = "search for Artist or Song"
    type="text"/>
    </div>

    <div className="header__right">
    <Avatar src ={user?.images[0]?.url} alt=""/> {/*shows error here, but still working on localhost. dont know why */}
    <h4>{user?.display_name}</h4>
    </div>

    </div>
    );
}
export default Header;