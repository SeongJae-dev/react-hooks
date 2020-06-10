import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Component/Counter";
import Info from "./Component/Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
      // <Counter />;
      <div>
        <button
            onClick={() => {
              setVisible(!visible);
            }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr/>
        {visible && <Info/>}
      </div>
  );
}

export default App;
