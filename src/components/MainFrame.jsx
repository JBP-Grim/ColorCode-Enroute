import React from "react";
import ResistanceFrame from "./ResistanceFrame";

function MainFrame(){
    return (
        <div className="mainFrame">
            <h1>Color Code</h1>
            <i><p>Select a column on resistor and click a color at the bottom to change the electronic properties.</p></i>
            <br />
            <ResistanceFrame/>
        </div>
    );
}

export default MainFrame;