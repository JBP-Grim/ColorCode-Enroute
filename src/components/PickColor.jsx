import React from "react";
import Color from "./Color";
import * as events from "../functionality/colorEvents"

function PickColor(){
    return (
        <div className="ColorsDiv row">
            {
                events.GetColors.colorList.map((getElement) => (
                    //getElement.color
                    <Color propid={"btn" + getElement.code} color={getElement.color} key={getElement.code}/>
                ))
            }
        </div>
    );
}

export default PickColor;