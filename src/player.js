import React from 'react';
import "./player.css";
import Sidebar from "./sidebar";
import Body from "./body";
import Footer from "./footer";

function Player({spotify}){
    return (
        <div className="player">
        <div className="player_body">
        <sidebar/>
         {/* sidebar*/ }
         <Sidebar/>
          <Body spotify ={spotify}/>
    </div>
      <Footer/>
        </div>
    );
}
export default Player;