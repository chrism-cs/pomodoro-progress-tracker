import './App.css'

function App() {

  return (
    <>
    <div className="wrapper">
      <h1> Pomodoro Timer</h1>

      <div className="timer-display">
        <span>25</span>
        <span>:</span>
        <span>00</span>
      </div>


      <div className="buttons">
        <button>START</button>
        <button>STOP</button>
      </div>
    </div>
    </>
  );
}

export default App
