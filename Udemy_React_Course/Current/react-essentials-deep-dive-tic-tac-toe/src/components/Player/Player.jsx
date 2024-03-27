import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditeButtonClick() {
    if (isEditing) {
      onNameChange(symbol, playerName);
    }

    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let nameElement = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    nameElement = (
      <input
        className="player-name-input"
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {nameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditeButtonClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
