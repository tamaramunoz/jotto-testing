import React from 'react';

import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <Input />
      <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
