import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime="1" />
        <TimerChallenge title="Not easy" targetTime="5" />
        <TimerChallenge title="Getting Hard" targetTime="10" />
        <TimerChallenge title="Going Pro" targetTime="15" />
      </div>
    </>
  );
}

export default App;
