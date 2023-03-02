import React, { useState } from 'react';

const Danger = () => {

    const [ temp, setTemp ]= useState('');

    const inputChangeHandler = (e) => {
        setTemp(e.target.value)
    }

    return (
        <div>
            <div>
                <textarea 
                    onChange = { inputChangeHandler }
                ></textarea>
            </div>
            <div>
                { temp }
            </div>
        </div>
    )
};

export default Danger;