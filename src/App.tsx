import React, { useState, MouseEvent } from 'react';

import './App.scss';
import Tab from './components/Tab';
import { Style } from './types';

const initialValue = {
  '--left': 0,
  '--opacity': 0,
};

function App() {
  const [highlightStyle, setHighlightStyle] = useState<Style>(initialValue);

  const moveHighlight = (e: MouseEvent<HTMLElement>) => {

    setHighlightStyle({
      '--left': e.nativeEvent.offsetX - 150,
    });
  };

  const hideHighlight = (e: MouseEvent<HTMLElement>) => {

    setHighlightStyle(old => ({
      ...old,
      '--left': e.nativeEvent.offsetX - 150,
      '--opacity': 0,
    }));
  };

  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab
            onMouseOut={hideHighlight}
            onMouseMove={moveHighlight}
            style={highlightStyle}
          >
            Home
          </Tab>
          <div className="tab">
          </div>
          <div className="tab">
          </div>
        </div>
        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
