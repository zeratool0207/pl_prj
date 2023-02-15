import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LoginNew = () => {

    const firstNumRef = useRef();
    const secondNumRef = useRef();
    const phoneRef = useRef();

    const [name, setName] = useState('');
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [authNum, setAuthNum] = useState('');
    const [phone, setPhone] = useState('');

    // lastCheck true가 되면 인증하기 버튼 색상 변경하기!!
    const [lastCheck, setLastCheck ]= useState(false);

    // 숫자 6개를 누르면 필드 자동변경
    const onChangeNum = e => {
        if (e.target.value.length == 6) {
            setFirstNum(e.target.value);
            secondNumRef.current.focus();
        }
    }

    // Enter 키 누르면 필드 자동변경
    const onKeyPress = (e) =>{
        if( name != '' && e.key == 'Enter' ){
            firstNumRef.current.focus();
        }
    }

    // 이후에 인증하기 버튼 클릭시 authNum 으로!!
    const randomNum = () => {
        setAuthNum(String(Math.floor(Math.random()*1000000)).padStart(6,"0"));
    }

    useEffect( () => {
        if (firstNum.length == 6) {
            secondNumRef.current.focus();
        }
    }, [ firstNum ])

    const firstNumCheck = e => {
        const num = /^[+-]?\d*(\.?\d*)?$/;
        if(!num.test(e.target.value)) {
            console.log('문자');
        } else {
            console.log('숫자');
            setFirstNum(e.target.value);
            //secondNumRef.current.focus();
        }
    }

    const lookingFormNum = e => {
        const num = /^[+-]?\d*(\.?\d*)?$/;
        if(!num.test(e.target.value)) {
            console.log('문자');
        } else {
            console.log('숫자');
            setSecondNum(e.target.value);
            phoneRef.current.focus();
        }
    }

    const [checked, setChecked ]= useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }



    return (
         <>
            <h2>휴대폰 본인인증</h2>
            <h3>휴대폰 본인인증 필요합니다.</h3>
            <label>
                <input  
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                전체동의
            </label>
            {/* 조건부로 보여지게끔  */}
            { checked &&
                <div >
                    {checked.toString()}
                </div>
            }
           
            
            {/* <label>
                <input  
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                전체동의
                <input  
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                전체동의
                <input  
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                전체동의
                <input  
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                전체동의
                <input  
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                전체동의
            </label> */}
            

            <h3>성명: 
                    <input 
                        type="text" 
                        value={name} 
                        name="name" 
                        onChange={ (e) => setName(e.target.value) }
                        onKeyPress = { onKeyPress }  
                        placeholder="이름을 입력해주세요" 
                        maxLength={5}
                    /></h3>
            <h3>주민번호: 
                    <input 
                        type="text" 
                        name="firstNum" 
                        maxLength={6} 
                        ref={firstNumRef} 
                        onChange={firstNumCheck} 
                        value={firstNum}
                    /> - 
                    <input 
                        type="text" 
                        name="secondNum" 
                        maxLength={1} 
                        ref={secondNumRef} 
                        value={secondNum} 
                        // onChange={ (e) => setSecondNum(e.target.value) }
                        onChange = {lookingFormNum}
                    />XXXXXX</h3>
            <h3>휴대폰번호</h3>
            {/* <SelectBox options={OPTIONS} defaultValue="banana"/>   */}
            
            <input 
                type="text" 
                value = { phone } 
                name="phone" 
                ref = {phoneRef}
                onChange={ (e) => setPhone(e.target.value) }
            />
            <h3>인증번호</h3>
            <input 
                type="text" 
                value={authNum} 
                name="authNum" 
                onChange = { (e) => setAuthNum(e.target.value) }
            />
            <button onClick={randomNum}>인증번호받기</button>
            <button>인증하기</button>
        </>
    )

}

export default LoginNew;