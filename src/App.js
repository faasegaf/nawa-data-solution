import "./App.css";
import { useState } from "react";
import { findVowels, findConsonans } from "../src/helper/helperFuntion";

function App() {
  const [character, setCharacter] = useState("");
  const [members, setMembers] = useState("");
  const [datas, setDatas] = useState([]);
  const [datas2, setDatas2] = useState([]);
  const [datas3, setDatas3] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setCharacter(e.target.value);
  };

  const handleChangeMember = (e) => {
    e.preventDefault();
    setMembers(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const vowels = findVowels(character);
    const consonans = findConsonans(character);
    setDatas([vowels]);
    setDatas2([consonans]);
    setCharacter("");
    // console.log(vowels);
    // console.log(consonans);
  };

  const handleSubmitMember = (e) => {
    const arr = members - Number(1);
    setDatas3([arr]);
    setMembers("");
    console.log(arr);
  };

  return (
    <div className="App">
      <div className="container">
        <h3>Input Case 1</h3>
        <input
          type="text"
          value={character}
          onChange={handleChange}
        ></input>{" "}
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <div>
          <p>Huruf vocal : {datas}</p>
          <p>Huruf consonan : {datas2}</p>
        </div>
        <h3>Input Case 2</h3>
        <input
          type="number"
          value={members}
          onChange={handleChangeMember}
        ></input>
        <br />
        <button onClick={handleSubmitMember}>Submit</button>
        <p>results : {datas3}</p>
      </div>
    </div>
  );
}

export default App;
