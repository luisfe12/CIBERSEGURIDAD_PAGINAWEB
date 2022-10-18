import React from "react";

function Seekbar({click_function}) {
  return (
    <>
      <input type="text" id="seek_bar_content" />
      <button type="button" onClick={click_function}>Verificar</button>
      <button type="button" onClick={click_function}>Cargar en lote</button>
    </>
  );
}

export default Seekbar;