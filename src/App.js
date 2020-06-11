import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Component/Counter";
import Info from "./Component/Info";
import Average from "./Component/Average";

function App() {
  const [visible, setVisible] = useState(false);
  return (
      <div>
        <Counter />;
        <button
            onClick={() => {
              setVisible(!visible);
            }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr/>
        {visible && <Info/>}
        <Average/>
      </div>
  );
}

export default App;
