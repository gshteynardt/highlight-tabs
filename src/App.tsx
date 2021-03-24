import React from 'react';

import './App.scss';
import Tab from './components/Tabs/components/Tab';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs className="Tabs">
        <Tab label="Home">
          Home
          </Tab>
        <Tab label="Page">
          Page
          </Tab>
        <Tab label="About">
          About
          </Tab>
      </Tabs>
    </div>
  );
}

export default App;
