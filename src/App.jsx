import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Intermediate"} targetTime={3} />
        <TimerChallenge title={"Difficult"} targetTime={5} />
        <TimerChallenge title={"Impossible"} targetTime={10} />
      </div>
    </>
  );
}

export default App;
