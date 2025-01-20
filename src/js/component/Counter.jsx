import React from "react";

export const Counter = (props) =>{
const formattedSeconds = props.seconds.toString().padStart(6, "0");

    return (
       <div className="row d-flex justify-content-center mt-1">
            <div className="col-11 d-flex bg-dark justify-content-around">
                <h1 className="text-light display-1 justify-content-center"> <img className="display-3" src="https://img.icons8.com/?size=100&id=10082&format=png&color=4D4D4D"/> {formattedSeconds}</h1>
            </div>
       </div>
    );
}
