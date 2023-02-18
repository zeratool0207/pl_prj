import React, { useState, useRef, useEffect } from 'react';

const CountUp = ({ start = 0, end}) => {
    const [ value, setValue ] = useState(null);
    const ref = useRef(start);

    const counter = end / 200;

    const Count = () => {
        if (ref.current < end ) {
            const result = Math.ceil(ref.current + counter);
            const resultComma = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            if ( result > end ) return setValue(end);
            setValue(resultComma);
            ref.current = result;
        }
        setTimeout(Count, 5);
    }

    useEffect( () => {
        let isMounted = true;
        if ( isMounted) {
            Count();
        }
        return () => (isMounted = false);
    },[end]);

    return (
        <div className="container">
            <h1>{value} 원</h1>
        </div>
    )

}

export default CountUp;