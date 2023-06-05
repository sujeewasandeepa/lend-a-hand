import "../assets/Tabs.css"
import { useState } from "react"

export default function Tabs (props) {

  const [adsActive, setAdsActive] = useState("is-active");
  const [reqActive, setReqActive] = useState("");

  const setActiveComp = props.setActiveComp;

  const handleAdsClick = () => {
    setAdsActive("is-active");
    setReqActive("");
    setActiveComp(0);
  }

  const handleReqClick = () => {
    setReqActive("is-active");
    setAdsActive("");
    setActiveComp(1);
  }

  return (
  <>
  <div id="tabs-div" className="tabs is-toggle">
    <ul>
      <li className={`${adsActive}`} onClick={handleAdsClick}>
        <a>
          <span>Ads</span>
        </a>
      </li>
      <li className={`${reqActive}`} onClick={handleReqClick}>
        <a>
          <span>Requests</span>
        </a>
      </li>
    </ul>
  </div>
  </>
  )
}
