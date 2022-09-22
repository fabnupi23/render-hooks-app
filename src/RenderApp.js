import React, { useState, useRef, useEffect } from 'react'

function RenderApp() {
  const [text, setText] = useState("");
  // #1 Se crea la referencia, la variable mutable con el valor de 1 
  const rendersRef= useRef(1); 

  //render 1  ref = 1 
  useEffect(() => {
    rendersRef.current++;
    //render 1 ref++ = 2
  })


  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>

        {/* render 1 ref=1 */}
        <h1>Renders: {rendersRef.current}</h1>
    </div>
  )
}

export { RenderApp };