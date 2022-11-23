import loader from "../../../asserts/images/loader.png";
import React from "react";

let Preloader = (props) => {
    return <div style = { {backgroundColor : 'white'} }> <img src = {loader}/> </div>
}
export default Preloader;