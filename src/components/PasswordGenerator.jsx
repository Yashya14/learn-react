import { useCallback, useEffect, useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "@#$!%^&*(){}[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);

  return (
    <div className="container">
      <h3>Password Generator</h3>
      <div className="main">
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          readOnly
        />
        <button>Copy</button>
        <div className="main2">
          <input
            type="range"
            name="length"
            value={length}
            id="length"
            min={1}
            max={99}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">({length})</label>

          <input
            type="checkbox"
            name="number"
            id="number"
            value={number}
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>

          <input
            type="checkbox"
            name="character"
            id="character"
            value={char}
            onChange={() => setChar((prev) => !prev)}
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
