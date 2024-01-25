import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordGenerator = useCallback(
    function () {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*()?<>/";

      for (let i = 1; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },
    [length, numAllowed, charAllowed, setPassword]
  );

  const passwordRef = useRef(null) ;
  const copyPasswordToClipboard  = useCallback(()=>{

    //onclick show some selected text on window 
    passwordRef.current?.select() ;

    //onclick show some selected text on window with some fixed range which we want 
    passwordRef.current?.setSelectionRange(0,100) ;

     window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=> {
    PasswordGenerator() 
  } , [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-5 text-orange-400 bg-gray-700">
        <h1 className="text-4xl text-center text-white my-3">
          Password generator
        </h1>

        <div className="flex shadow-sm rounded-lg mb-4 overflow-hidden">
          <input
            value={Password}
            readOnly
            placeholder="password"
            type="text"
            className="outline-none w-full py-3 px-3"
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 px-4 text-white">copy</button>
        </div>

        <div className="flex text-sm  gap-x-2">
        <div className="flex   items-center  gapx-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="p-2" htmlFor="">
            Length : {length}
          </label>

        
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setnumAllowed((prev) => !prev);
            }}
          />
          <label className="p-2" htmlFor="">
            Numbers
          </label>

          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className="p-2" htmlFor="">
            Chracter
          </label>
        </div>
        </div>

      </div>
    </>
  );
}

export default App;
