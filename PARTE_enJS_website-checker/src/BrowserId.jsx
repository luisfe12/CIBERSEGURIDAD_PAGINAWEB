import { browserName, browserVersion } from "react-device-detect";

function BrowserId() {
  if(browserName === "Firefox"){
    //import FirefoxCA from "./trust-store/firefox-trust-store.json";
    //const FirefoxCA = require("./trust-store/firefox-trust-store.json");

    return (<><h1>A</h1></>)
  }else{
    return (<><h1>{browserName} - {browserVersion}</h1></>)
  }
}

export default BrowserId;