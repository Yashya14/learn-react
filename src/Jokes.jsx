import { useEffect, useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState({});

  let URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let res = await fetch(URL);
    let jsonResponse = await res.json();
    console.log(jsonResponse);

    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let res = await fetch(URL);
      let jsonResponse = await res.json();
      console.log(jsonResponse);

      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <>
      <h3>Jokes😂🤣</h3>
      <h2>{joke.setup}</h2>
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}>New Joke</button>
      <hr />
    </>
  );
};

export default Jokes;
