import React, { useState, useCallback, } from 'react';
import { FormControl, Button } from 'react-bootstrap'
import './App.css';
import { DrawingField } from './Components/DrawingField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CanvasType } from './utils/types';
import { draw } from './draw'


const App = () => {

  const [strInput, setStrInput] = useState('');
  const [canvas, setCanvas] = useState<CanvasType>()

  const handleStrInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setStrInput(event.target.value)
  }, [setStrInput]);

  const send = useCallback(() => {
    const input = strInput.split('\n');
    setCanvas(draw(input));
  }, [strInput, setCanvas]);

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
        canvas && <DrawingField canvas={canvas} />
      }
    </div>
  );
}

export default App;