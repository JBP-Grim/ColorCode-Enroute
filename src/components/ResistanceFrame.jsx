import React, { useState } from "react";
import Color from "./Color";
import * as events from "../functionality/colorEvents"


function ResistanceFrame () {
    //Used to keep the current color of the line when click on resistor column
    const [color1, setColor1] = useState("red");
    const [color2, setColor2] = useState("red");
    const [color3, setColor3] = useState("orange");
    const [color4, setColor4] = useState("gold");

    var firstCol = {
        "backgroundColor":color1,
        "width":"10px !important",
        "padding":0,
        "border":"0px solid white"
    }
    
    var firstColSelected = {
        "backgroundColor":color1,
        "width":"10px !important",
        "padding":0,
        "border":"3px solid white"
    }
    
    var seccondCol = {
        "backgroundColor":color2,
        "width":"10px !important",
        "padding":0,
        "border":"0px solid white"
    }

    var seccondColSelected = {
        "backgroundColor":color2,
        "width":"10px !important",
        "padding":0,
        "border":"3px solid white"
    }


    var thirdCol = {
        "backgroundColor":color3,
        "width":"10px !important",
        "padding":0,
        "border":"0px solid white"
    }

    var thirdColSelected = {
        "backgroundColor":color3,
        "width":"10px !important",
        "padding":0,
        "border":"3px solid white"
    }

    var fourCol = {
        "backgroundColor":color4,
        "width":"10px !important",
        "padding":0,
        "border":"0px solid white"
    }

    var fourColSelected = {
        "backgroundColor":color4,
        "width":"10px !important",
        "padding":0,
        "border":"3px solid white"
    }

    var clearStyle = {
        "border":"0px solid white"
    }

    //used to change the style of the resistor column
    const [customStyle1, setCustomStyle1] = useState(firstCol)
    const [customStyle2, setCustomStyle2] = useState(seccondCol)
    const [customStyle3, setCustomStyle3] = useState(thirdCol)
    const [customStyle4, setCustomStyle4] = useState(fourCol)
    //used to save the last col index picked
    const [colPicked, setColPicked] = useState(1)
    //used to change the value of the color code result
    const [colVal1, setColVal1] = useState("2")
    const [colVal2, setColVal2] = useState("2")
    const [colVal3, setColVal3] = useState("000")
    const [colVal4, setColVal4] = useState("±5%")
    const [divided1, setDivided1] = useState(false)
    const [divided2, setDivided2] = useState(false)

    //change the style of the clicked column
    function resistorClick(numb) {
        
        clearAll();
        if(numb === 1) {
            setCustomStyle1(firstColSelected);
            setColPicked(1);
        } else if (numb === 2) {
            setCustomStyle2(seccondColSelected);
            setColPicked(2)
        } else if (numb === 3) {
            setCustomStyle3(thirdColSelected);
            setColPicked(3)
        } else {
            setCustomStyle4(fourColSelected);
            setColPicked(4)
        }
    }

    //change the color of the column and recalculate the color code
    function colorClick(getColor, getVal1, getVal2, getVal3) {
        if(getColor === 'None'){
            getColor = "bisque";
        }
        
        var newColor = {
            "backgroundColor":getColor,
            "width":"10px !important",
            "padding":0,
            "border":"3px solid white"
        }

        console.log(colPicked);
        if(colPicked === 1) {
            if(getColor === 'Black'){
                getVal1 = '';
            }

            if(divided2 === true){
                getVal1 = '0.' + getVal1;
            }

            setColor1(getColor);
            setCustomStyle1(newColor);
            setColVal1(getVal1)
        } else if (colPicked === 2) {
            if(divided1 === true){
                getVal1 = '.' + getVal1;
            }
            setColor2(getColor);
            setCustomStyle2(newColor);
            setColVal2(getVal1)
        } else if (colPicked === 3) {
            if(getColor === 'Pink'){
                
            } else if (getColor === 'Gold'){
                var newVal = colVal2
                newVal = '.' + newVal.replace('.','');
                setColVal2(newVal)

                var newVal2 = colVal1
                newVal2 = newVal2.replace('0.','');
                setColVal1(newVal2)

                setCustomStyle3(newColor);
                setColor3(getColor);
                setColVal3(" ");
                setDivided1(true);
            } else if (getColor === 'Silver'){
                var newVal2 = colVal1
                newVal2 = '0.' + newVal2.replace('0.','');
                setColVal1(newVal2)
                
                var newVal = colVal2
                newVal = newVal.replace('.','');
                setColVal2(newVal)

                setCustomStyle3(newColor);
                setColor3(getColor);
                setColVal3(" ");
                setDivided2(true);
            } else {
                
                setColVal1(colVal1.replace('0.',''))
                setColVal2(colVal2.replace('.',''))
                setColVal3(getVal2)

                setCustomStyle3(newColor);
                setColor3(getColor);
                setDivided1(false);
                setDivided2(false);
            }
        } else {
            setColor4(getColor);
            setCustomStyle4(newColor);
            setColVal4(getVal3)
        }
        
    }

    //when you click a resistor column, before set the "clicked style" (when white border shows up), all columns must delete the "clicked style" (remove white border)
    function clearAll(){
        setCustomStyle1(firstCol);
        setCustomStyle2(seccondCol);
        setCustomStyle3(thirdCol);
        setCustomStyle4(fourCol);
    }
 
    return (
        <div>
            <div className="resistanceDiv">
                <hr/>
                <div className="ressistance row">
                    <div className="col-2">
                    </div>
                    <div className="col-1" style={customStyle1} onClick={() => resistorClick(1)}>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-1" style={customStyle2} onClick={() => resistorClick(2)}>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-1" style={customStyle3} onClick={() => resistorClick(3)}>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-1" style={customStyle4} onClick={() => resistorClick(4)}>
                    </div>
                </div>
                <div className="divResult">
                    <h2>{colVal1 + colVal2 + colVal3 + "ohms " + colVal4}</h2>
                </div>
            </div>
            <div className="ColorsDiv row">
                {
                    events.GetColors.colorList.map((getElement) => (
                        //getElement.color
                        <div key={"div" + getElement.code} onClick={() => colorClick(getElement.color, getElement.num, getElement.multipliers, getElement.percent)} style={{display:"contents"}}>
                            <Color propid={"btn" + getElement.code} color={getElement.color} key={getElement.code}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ResistanceFrame;