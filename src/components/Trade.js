import React from 'react';

const Trade = () => {

    const TRADE_LIST = [
        {
            id: 1,
            name: 'WON 통장',
            step: 2,
            saveDate: '2023.01.12 08:32:22'
        },
        {
            id: 2,
            name: '첫급여 우리통장',
            step: 3,
            saveDate: '2023.01.12 08:32:22'
        },
        {
            id: 3,
            name: 'WON 적금',
            step: 6,
            saveDate: '2023.01.12 08:32:22'
        },
        {
            id: 4,
            name: 'WON 기업정기예금',
            step: 6,
            saveDate: '2023.01.12 08:32:22'
        },
    ];

    const tradeList = TRADE_LIST.map((trade) =>(<li>{trade.id} <br/> {trade.name} <br /> {trade.step}/6 <br/> {trade.saveDate}</li>))

    return (
        <>
            <ul>
                {tradeList}
            </ul>
        </>
    )
}

export default Trade;