import React from 'react';
import dummy from './db/savingData.json'


const DateList = () => {
    console.log(dummy);
    return (
        <>
            <div>
                {dummy.savings.map( saving => (
                    <div>
                        <div>{saving.name}</div>
                        <div>{saving.step}</div>
                        <div>{saving.type}</div>
                        <div>{saving.amount}</div>
                        <div>{saving.date}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DateList;