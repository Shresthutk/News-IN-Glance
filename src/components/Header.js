import React from "react";

export default function Header(props) {
 
    return (
      <div>
        <div className="container">
          <h1 className="title is-3 my-3 light-font">{props.heading}</h1>
        </div>
      </div>
    );
  }

