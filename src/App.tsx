import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap'
import './App.css';
import { DrawingField } from './Components/DrawingField';
import { ICanvas, ILine, IRectangle, IBucketFill } from './utils/types';
import 'bootstrap/dist/css/bootstrap.min.css';

import { draw } from './draw'


const App = () => {

  const [strInput, setStrInput] = useState('');
  const [canvas, setCanvas] = useState(null as any)

  const handleStrInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrInput(event.target.value)
  };

  const send = () => {
    const input = strInput.split('\n');
    setCanvas(draw(input));
  };

  return (
    <div className='container'>
      <FormControl
        as="textarea"
        aria-label="With textarea"
        value={strInput}
        onChange={handleStrInputChange}
        rows={5}
      />
      <Button variant="secondary" onClick={send}>Send</Button>
      {
        canvas ? <DrawingField canvas={canvas} /> : null
      }
    </div>
  );
}

export default App;