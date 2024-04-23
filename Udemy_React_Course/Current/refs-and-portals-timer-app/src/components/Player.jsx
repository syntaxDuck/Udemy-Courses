import { useState, useRef } from "react";

export default function Player() {
  let ref = useRef();
  let [playerName, setPlayerName] = useState();

  function handleClick() {
    setPlayerName(ref.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={ref} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
