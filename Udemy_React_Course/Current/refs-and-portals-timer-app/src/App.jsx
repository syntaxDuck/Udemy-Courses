import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
      </div>
      <div id="challenges">
        <TimerChallenge title="Medium" targetTime={2} />
      </div>
      <div id="challenges">
        <TimerChallenge title="Hard" targetTime={3} />
      </div>
      <div id="challenges">
        <TimerChallenge title="Extrem" targetTime={4} />
      </div>
    </>
  );
}

export default App;
