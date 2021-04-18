import './App.css';
import React, {useState} from 'react';

function App() {

  const [textString, setTextString] = useState();
  const [iString, setIString] = useState([]);
  const [displayString, setDisplayString] = useState("");


  const handleChange = (e) => {
    setIString(e.target.value.split(" "));
  }

  function getRandomWith() {
    var randomString = Math.floor(Math.random() * iString.length);
    setDisplayString(iString[randomString]);
    document.getElementById("insertDisplay").innerHTML = "With replacement"
  } 

  function getRandomWithout() {
    var randomString = Math.floor(Math.random() * iString.length);
    if (iString.length != 0) {
      setDisplayString(iString[randomString]);
      iString.splice(randomString, 1);
    } else {
      setDisplayString("");
    }
    document.getElementById("insertDisplay").innerHTML = "Without replacement"
  }

  function clear() {
    document.getElementById("textValue").value = "";
    setTextString();
    setDisplayString("");
    setIString([]);
    document.getElementById("insertDisplay").innerHTML = "";
  }

  return (
    <div className="App">
      <div className="form-box">
        <textarea type="text" id="textValue" cols="30" row="10" value={textString} onChange={handleChange}></textarea>
        <div>
          <button onClick={getRandomWith}>Random String with Replacement</button>
          <button onClick={getRandomWithout}>Random String without Replacement</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
      <div>
        <p id="insertDisplay"></p>
        <input type="text" value={displayString}/>
      </div>
    </div>
  );
}

export default App;
