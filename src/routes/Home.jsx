import Tabs from "../components/Tabs";
import { useState } from "react";

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
                  Ads
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
