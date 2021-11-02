import React from "react";
import Doggie from "./dog.js"

export default function DogPound(props){
    return(<div>
        {
            props.dogData.map((i, index) => <Doggie {...i} key={index}/>)
        }
    </div>
    )
}