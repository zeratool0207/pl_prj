import React from 'react';
import dummy from './db/data.json'

const DateList = () => {
    console.log(dummy);
    return (
        <>
            <ul>
                {dummy.days.map(day => (
                    <li key={day.id}>{day.day}</li>
                ))}
            </ul>
            <ul>
                {dummy.words.map(word => (
                    <li key={word.id}>{word.eng} ( {word.kor} )</li>
                ))}
            </ul>
        </>
    )
}

export default DateList;