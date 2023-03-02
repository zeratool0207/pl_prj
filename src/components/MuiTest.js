import React from 'react';
import Button from '@mui/material/Button'

const MuiTest = () => {
    
    const btnAlert = () => {
        alert('button Test');
    }
    
    return (
        <div>
            <Button variant="contained" onClick={btnAlert}>Hello World</Button>
        </div>
    )
};

export default MuiTest;