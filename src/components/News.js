import React, { useState,useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

function News ()  {

  const [articles,setArticles]=useState(null);
  const [loading,setLoading]=useState(true);
  const [totalResults,setTotalResults]=useState(0);

  useEffect(() => {
    
      fetch("https://gnews.io/api/v4/top-headlines?token=2ad2e3ce71552ef8745444020b6cb20a&lang=en&country=in")
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(loading){
          setArticles(data['articles'])
          setTotalResults(data['totalResults'])
          setLoading(false)
        }
      })

  
    return ()=>{
     setLoading(false); 
    }
  },[])

    return (
      <>
        <div className="custom-margin">
         {loading && <Spinner/>}
          {articles && articles.map((element) => {
            return (
              <div key={element.url}>
                <Newsitem
                  author={element.author && element.author}
                  image={element.image && element.image}
                  time={element.publishedAt && element.publishedAt}
                  title={element.title && element.title}
                />
              </div>
            );
          })}
        </div>
        <div className="container is-flex is-flex-direction-row is-justify-content-space-between ">
        
        </div>
      </>
    );
  }


export default News;
