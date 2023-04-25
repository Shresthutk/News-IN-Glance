import React from 'react'

function Newsitem(props) {
  
        
        return (
            <div className="container my-5 " >
                        <div className="card is-flex dark-bg-secondry" >
                <div className="card-image">
                    <figure className="imgbox ">
                    <img src={props.image} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-content">
                        <p className="title is-5 light-font">{props.author}</p>
                    </div>
                    </div>

                    <div className="content title is-4 wheat">
                   {props.title}
                    <br/>
                    <time className="title is-6 wheatsmoke">{props.time}</time>
                    </div>
                </div>
                </div>
      </div>
    )
  }


export default Newsitem
