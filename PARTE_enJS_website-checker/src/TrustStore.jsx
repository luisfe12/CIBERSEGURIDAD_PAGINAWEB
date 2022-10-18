//import React, { useState, useEffect } from 'react';
import "./TrustStore.css"
import { browserName } from "react-device-detect";

function TrustStore(props) {
  /*const [data, getData] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = () => {
    fetch(URL)
      .then((res) =>
        res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      })

  }*/
  if(browserName === "Firefox"){
    const FirefoxCA = require("./trust-store/firefox-trust-store.json");
    return (
      <>
        <h2>Trust Store Service</h2>
        <center>
          <tbody>
            <tr>
              <th>Owner</th>
              <th>Valido de</th>
              <th>Hasta</th>
              <th>Public Key Algorithm</th>
              <th>Usos de la llave</th>
              <th>SHA-256</th>
            </tr>
            {FirefoxCA.map((item, i) => (
              <tr key={i}>
                <td>{item.Owner}</td>
                <td>{item["Valid From [GMT]"]}</td>
                <td>{item['Valid To [GMT]']}</td>
                <td>{item['Public Key Algorithm']}</td>
                <td>{item['Trust Bits']}</td>
                <td>{item["SHA-256 Fingerprint (Click to download .crt files)"]}</td>
              </tr>
            ))}
          </tbody>
        </center>
      </>
    );
  }else if(browserName === "Edge"){
    const EdgeCA = require("./trust-store/edge-trust-store.json");
    return (
      <>
        <h2>Trust Store Service</h2>
        <center>
          <tbody>
            <tr>
              <th>Owner</th>
              <th>Valido de</th>
              <th>Hasta</th>
              <th>Public Key Algorithm</th>
              <th>Usos de la llave</th>
              <th>SHA-1</th>
            </tr>
            {EdgeCA.map((item, i) => (
              <tr key={i}>
                <td>{item["CA Owner"]}</td>
                <td>{item["Valid From [GMT]"]}</td>
                <td>{item['Valid To [GMT]']}</td>
                <td>{item['Public Key Algorithm']}</td>
                <td>{item["Microsoft EKUs"]}</td>
                <td>{item["SHA-1 Fingerprint"]}</td>
              </tr>
            ))}
          </tbody>
        </center>
      </>
    );
  }else if(browserName === "Chrome"){
    const ChromiumCA = require("./trust-store/chromium-trust-store.json");
    return (
      <>
        <h2>Trust Store Service</h2>
        <center>
          <tbody>
            <tr>
              <th>Owner</th>
              <th>Valido desde</th>
              <th>Hasta</th>
              <th>SHA 256 Hash</th>
            </tr>
            {ChromiumCA.map((item, i) => (
              <tr key={i}>
                <td>{item.Subject.split(",")[1]}</td>
                <td>{item.NotBefore}</td>
                <td>{item.NotAfter}</td>
                <td>{item["SHA 256 Hash"]}</td>
              </tr>
            ))}
          </tbody>
        </center>
      </>
    );
  }
  
}

export default TrustStore;