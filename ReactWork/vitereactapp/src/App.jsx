import React from "react"; 
import Student from "./student";
import Student2 from "./Student2";
function App()
{
  const style={
    backgroundColor:'red',
    color:"cyan"
}
  return(
    <div style={style}> Abres Engg. College
    <Student/>
    </div>
    
  )

}

export default App