import { useState } from 'react';
import './App.css';
import { Button } from './Button';

function App() {
  const [isActive, setIsActive] = useState('false');

  return (
    <div>
      <Button
        propIsActive={isActive}
        propSetIsActive={setIsActive}
      />
      <Button
        propIsActive={isActive}
        propSetIsActive={setIsActive}
      />
    </div>
  )
}

export default App;
