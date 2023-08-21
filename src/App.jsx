import { useEffect, useState } from "react";

const App = () => {
  const [fact, setFact] = useState("loren ipsum");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      <h2>{fact}</h2>
    </main>
  );
};

export default App;
