import Tabs from "../components/Tabs";
import { useState } from "react";
import Ad from "../components/Ad";

import "../assets/home.css";

export default function Home () {
  // if activeComp is 0 consider Ads is active 
  // if it is 1 consider Reqs is active
  const [activeComp, setActiveComp] = useState(0);

    return (
        <>
            <h1 className="title is-2 has-text-centered mt-3">Handy Hero</h1>

            <div className="has-text-centered">
              <Tabs setActiveComp={setActiveComp}/>
              {activeComp==0 ?
              <div>
                  <div className="ad pt-5">
                      <Ad title="Plumber for hire!" author="Sujeewa" 
                      description="hello, I'm an experienced plumber at your service"
                      price='2000' />
                  </div>
                  <div className="ad pt-5">
                      <Ad title="Painter" author="Ajith" 
                      description="hello, I'm a good painter!"
                      price='1500' />
                  </div>
              </div>
                :
                <div>
                  reqs
                </div>
              }
            </div>
                         
        </>
    )
}
