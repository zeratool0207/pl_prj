import React, { useState } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

const Test = () => {

    const [ isPopupOpen, setIsPopupOpen ] = useState(false);

    const openPostCode = () => {
        setIsPopupOpen(true);
    }

    const closePostCode = () => {
        setIsPopupOpen(false);
    }

    const [ data, setData ] = useState('initial data');

    return (
        <div>
            <button 
                type="button" 
                onClick = { openPostCode 
            }>우편번호 검색</button>
            <div id = "popupDom">
                { isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose = { closePostCode } setData = { setData } />
                    </PopupDom>
                )}
            </div>
            <span> { data } </span>
        </div>
    )

}

export default Test;