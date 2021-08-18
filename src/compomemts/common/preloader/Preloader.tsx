import preloader from "../../../assets/images/preloader.gif";
import React from "react";

let Preloader = () => {
    return (
        <img style={{position: 'fixed'}} src={preloader} alt={'Preloader'}/>
    )
}
export default Preloader