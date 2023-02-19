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

    const [checkA, setCheckA] = useState(false);
    const [checkB, setCheckB] = useState(false);
    const [checkC, setCheckC] = useState(false);
    const [checkD, setCheckD] = useState(false);
    const [checkE, setCheckE] = useState(false);

    const onChangeCheckHandler = ( code ) => {
        switch(code) {
            case 'a':
                setCheckA(!checkA)
                break;
            case 'b':
                setCheckB(!checkB)
                break;
            case 'c':
                setCheckC(!checkC)
                break;
            case 'd':
                setCheckD(!checkD)
                break;
            case 'e':
                setCheckE(!checkE)
                break;
            default:
                break;
        }
    }

    useEffect( () => {
        if ( checkA == true && checkB == true && checkC == true && checkD == true && checkE == true ) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [checkA, checkB, checkC, checkD, checkE])

    useEffect( () => {
        if ( checked ) {
            setCheckA(true);
            setCheckB(true);
            setCheckC(true);
            setCheckD(true);
            setCheckE(true);
        } else {
            setCheckA(false);
            setCheckB(false);
            setCheckC(false);
            setCheckD(false);
            setCheckE(false);
        }
    }, [checked])

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
            { !checked &&
                <div >
                    &nbsp;&nbsp;
                    <input
                        type="checkbox"
                        checked={checkA}
                        onChange={() => onChangeCheckHandler('a')}
                    />개인정보수집동의
                    <br/>
                    &nbsp;&nbsp;
                     <input
                        type="checkbox"
                        checked={checkB}
                        onChange={() => onChangeCheckHandler('b')}
                    />고유식별정보처리동의
                    <br/>
                    &nbsp;&nbsp;
                     <input
                        type="checkbox"
                        checked={checkC}
                        onChange={() => onChangeCheckHandler('c')}
                    />본인확인 서비스
                    <br/>
                    &nbsp;&nbsp;
                     <input
                        type="checkbox"
                        checked={checkD}
                        onChange={() => onChangeCheckHandler('d')}
                    />서비스 이용약관 동의
                    <br/>
                    &nbsp;&nbsp;
                     <input
                        type="checkbox"
                        checked={checkE}
                        onChange={() => onChangeCheckHandler('e')}
                    />개인정보 제3자 제공 동의
                    <br/>
                    &nbsp;&nbsp;
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