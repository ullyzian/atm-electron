import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { DarkTheme, BaseProvider } from 'baseui';

import Numpad from './components/Numpad/Numpad';
import Display from './components/Display/Display';

import './App.scss';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <div className="App">
          <header className="App-header">
            <Display />
            <Numpad />
          </header>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
