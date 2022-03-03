import React from 'react';
import Name from './Name';
import Aboutme from './Aboutme';
import Keyskills from './Keyskills';
import Education from './Education';
import Projects from './Projects';

function App () {
  return (
    <div className="grid-container">
      <Name />
      <Aboutme />
      <Keyskills />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
