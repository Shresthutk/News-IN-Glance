import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import News from "./News";

export default function Home () {

    return (
      <div>
        <>
          <Navbar />
          <Header heading="News IN-Glance" />
          <News />
        </>
      </div>
    );
  }
