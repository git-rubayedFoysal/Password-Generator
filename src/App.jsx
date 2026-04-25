import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*_-+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length + 1));

      pass += char;
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    generatePassword();
  }, [length, numberAllow, charAllow, generatePassword]);

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
  }, [password]);

  return (
    <div className="w-full max-w-md rounded-lg shadow-lg bg-gray-700 py-8 px-5 my-8 font-mono text-white ">
      <h1 className="text-3xl font-bold mb-7 text-center">
        Password Generator
      </h1>
      <div className="flex overflow-hidden shadow rounded-sm my-4">
        <input
          type="text"
          readOnly
          className="bg-white w-full py-1 px-3 font-bold text-black outline-none"
          value={password}
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          className="bg-blue-800 text-white font-bold px-4 py-1.5 shrink-0 cursor-pointer"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 text-orange-600 font-bold justify-evenly my-5">
        <div className="flex gap-x-1 items-center">
          <input
            type="range"
            value={length}
            min={6}
            max={100}
            id="length"
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className="flex gap-x-1 items-center">
          <input
            type="checkbox"
            id="number"
            onChange={() => setNumberAllow((numberAllow) => !numberAllow)}
            className="cursor-pointer"
          />
          <label htmlFor="number" className="cursor-pointer">
            Number
          </label>
        </div>
        <div className="flex gap-x-1 items-center">
          <input
            type="checkbox"
            id="char"
            onChange={() => setCharAllow((charAllow) => !charAllow)}
            className="cursor-pointer"
          />
          <label htmlFor="char" className="cursor-pointer">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
