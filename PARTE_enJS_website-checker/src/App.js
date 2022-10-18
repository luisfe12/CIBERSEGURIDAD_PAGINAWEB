import React , { useState } from 'react';
import './App.css';
import Seekbar from './SeekBar';
import ResultBox from './ResultBox';
import BrowserId from './BrowserId';
import TrustStore from './TrustStore';

function App() {
  
  const [text_ch,update_text] = useState("");
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const write = () => {
    update_text(text_ch => document.getElementById("seek_bar_content").value );
    //fetch("./ssl-checker.js").then((response) => response.json()).then((dog) => console.log(dog));
    const axios = require('axios').default;
    axios.request('http://localhost:3000/src/ssl_checker')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
    });
    //const getSslDetails = async (hostname) => await sslChecker(document.getElementById("seek_bar_content").value);
    //sslChecker(document.getElementById("seek_bar_content").value, { method: "GET", port: 443 }).then(console.info);
  }

  /*const seeFirefox = () => {
    const FirefoxCA = require("./trust-store/firefox-trust-store.json");
    render(
      {FirefoxCA.map((item, i) => (
        <tr key={i}>
          <td>{item.Owner}</td>
          <td>{item["Valid From [GMT]"]}</td>
          <td>{item['Valid To [GMT]']}</td>
          <td>{item['Public Key Algorithm']}</td>
        </tr>
      ))}
    )
  }*/

  return (
    <>
      <Seekbar click_function={write}/>
      <ResultBox new_text={text_ch}/>
      <BrowserId/>
      <div>
        <button onClick={handleClick}>Ver Trust Store del navegador</button>

        {isShown && (
          <div>
            <h2> </h2>
          </div>
        )}

        {isShown && <TrustStore />}
      </div>
    </>
  );
}

export default App;
