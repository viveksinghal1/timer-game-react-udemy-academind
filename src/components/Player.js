import { useRef, useState } from "react";

export default function Player() {
  const playerInput = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleNameChange() {
    setPlayerName(playerInput.current.value);
    playerInput.current.value = null;
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerInput} type="text" />
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
