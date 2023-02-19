import { useState, useEffect } from "react"
import getAdvice from "./getAdvice";

function App() {
  const [advice, setAdvice] = useState({})
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  window.onresize = () => setWindowWidth(window.innerWidth)

  const changeAdvice = async () => {
    let slip = await getAdvice()
    setAdvice(slip)
  }

  useEffect(() => {
    changeAdvice()
  }, [])

  return (
    <div className="container">
      <h1 className="advice-id">ADVICE #{advice.id}</h1>
      <p className="advice-text">"{advice.advice}"</p>
      {
        windowWidth > 375
          ? <img src="./images/pattern-divider-desktop.svg" alt="divider" className="divider" />
          : <img src="./images/pattern-divider-mobile.svg" alt="divider" className="divider" />
      }
      <button className="roll-advice" onClick={changeAdvice} >
        <img src="./images/icon-dice.svg" alt="dice icon" />
      </button>
    </div>
  );
}

export default App;
