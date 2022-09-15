import './index.scss';
import {useState} from "react";


function App() {

  const [count, setCount] = useState(0);

  const onClickPlus = () => setCount(count + 1);
  const onClickMinus = () => setCount(count - 1);
  const onClickReset = () =>setCount(0);
  const onClickRandom = () =>setCount(Math.floor(Math.random()*100));

  return (
      <div className="App">
        <div>
          <h2>Counter on the React:</h2>
          <h1>{count}</h1>
          <button onClick={onClickMinus} className="minus">- Minus</button>
          <button onClick={onClickReset} className="reset">Reset</button>
          <button onClick={onClickRandom} className="random">Random</button>
          <button onClick={onClickPlus} className="plus">Plus +</button>
        </div>
      </div>
  );
}

export default App;