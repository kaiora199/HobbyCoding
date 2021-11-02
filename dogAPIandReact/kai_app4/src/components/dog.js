import React from "react";

export default function Doggie(props){
    return(<div>
      <div>
      <ul>
        <li>{props.id}</li>
        <li>{props.name}</li>
        <li>{props.age}</li>
      </ul>
    </div>
    </div>
    )
}