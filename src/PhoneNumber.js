import React, { useState, useEffect } from 'react';

const PhoneNumber = () => {
    const [ phone, setPhone ] = useState('');

    const phoneChangeHandler = (e) => {
        const num = /^[+-]?\d*(\.?\d*)?$/;
        if ( num.test(e.target.value) ) {
            setPhone(e.target.value);
        }
    }

    useEffect( () => {
        if ( phone.length == 11 ) {
            setPhone(phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'))
        }
    }, [phone])

    return (
        <div>
            <input type="text" value={phone} maxLength={13} onChange={phoneChangeHandler}/>
        </div>
    )
};

export default PhoneNumber;