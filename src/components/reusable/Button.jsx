import React from 'react';
import { Button } from '@mui/material';
import "../../style/button.css"

const MyButtons = () => {
  return (
    <div className='Buttons'>
      <Button variant="contained" color="primary" onClick={() => {}}>
        Learn More
      </Button>
      <Button variant="contained" color="primary" onClick={() => {}}>
        Download App
      </Button>
    </div>
  );
}

export default MyButtons;
