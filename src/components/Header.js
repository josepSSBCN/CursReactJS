import React, { Component } from "react";
import logo from "../img/qx7jYSYm_400x400.jpg";
import Salutacio from "./Salutacio.js";
import "../css/Header.css";

class Header extends Component {
    render(){
        var josep = "Josep";
        return(
            <h1 className="salutacio"><img src={logo} height="50px" alt=""/> El teu portal de senderisme. <Salutacio nick={josep}/></h1>
        )
    }
}

export default Header
