import { useState, useEffect } from "react"
import getAdvice from "./getAdvice";

function App() {
  const [advice, setAdvice] = useState({})

  const changeAdvice = async () => {
    let slip = await getAdvice()
    setAdvice(slip)
  }

  useEffect(() => {
    changeAdvice()
  }, [])

  useEffect(() => {
    console.log(advice)
  }, [advice])

  return (
    <div className="container">
      <h1>Advice #{advice.id}</h1>
      <p>{advice.advice}</p>
    </div>
  );
}

export default App;
