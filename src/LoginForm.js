import React, { useState, useRef } from 'react';
import { Link , useHistory } from 'react-router-dom';


const LoginForm = () => {

    // yarn create react-app hello-react

    const secondNumRef = useRef();

    // 비구조할당 고민해볼것!!

    // const [name, setName] = useState('');
    // const [firstNum, setFirstNum] = useState('');
    // const [secondNum, setSecondNum] = useState('');
    // const [authNum, setAuthNum] = useState('');
    // const [phone, setPhone] = useState('');
    // const [random, setRandom] = useState('000000');

    const [inputs, setInputs] = useState({
        name : '',
        firstNum: '',
        secondNum: '',
        authNum: '',
        phone: '',
        random: '000000'
    });

    const { name, firstNum, secondNum, authNum, phone, random } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        }) 
    }

    const onReset = () => {
        setInputs({
            name : '',
            firstNum: '',
            secondNum: '',
            authNum: '',
            phone: '',
            random: '000000',
        })
    }





    // const randomNum = () => {
    //     setRandom(String(Math.floor(Math.random()*1000000)).padStart(6,"0"));
    // }

    // const onChangeName = e => {
    //     setName(e.target.value);
    // }

    // const onChangeSecondNum = e => {
    //     setSecondNum(e.target.value);
    // }

    // const onChangePhone = e => {
    //     setPhone(e.target.value);
    // }

    // const onChangeAuthNum = e => {
    //     setAuthNum(e.target.value);
    // }

    const authTest = () => {
        let state = true;
        if ( name == '' || phone == '') {
            state = false;
        }
        return state;
    }

    // const onChangeNum = e => {
    //     if (e.target.value.length == 6) {
    //         setFirstNum(e.target.value);
    //         secondNumRef.current.focus();
    //     }
    // }

    const OPTIONS = [
        { value: "apple", name: "사과" },
        { value: "banana", name: "바나나" },
        { value: "orange", name: "오렌지" },
    ];
    
    const SelectBox = (props) => {
        return (
            <select>
                {props.options.map((option, index) => (
                    <option
                        key = {index}
                        value={option.value}
                        defaultValue={props.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        );
    };

    const getCheck = () => {
        if ( random === authNum ) {
            alert('맞아요 맞아!');
        } else {
            alert('틀렸어용ㅠㅠ');
        }
    }

    const lastCheck = () => {
        console.log('name : '+ name);
        console.log('firstNum : '+ firstNum);
        console.log('secondNum : '+ secondNum);
        console.log('authNum : '+ authNum);
        console.log('phone : '+ phone);
        console.log('random : '+ random);
    }

    return (
        <>
            <h2>휴대폰 본인인증</h2>
            <h3>휴대폰 본인인증 필요합니다.</h3>

            <h3>성명: <input type="text" value={name} name="name" onChange={onChange} placeholder="이름을 입력해주세요" maxLength={5}/></h3>
            <h3>주민번호: <input type="text" name="firstNum" maxLength={6} onChange={onChange} value={firstNum}/> - <input type="text" name="secondNum" maxLength={1} ref={secondNumRef} value={secondNum} onChange={onChange}/>XXXXXX</h3>
            <h3>휴대폰번호</h3>
            <SelectBox options={OPTIONS} defaultValue="banana"/>  
            
            <input type="text" value = { phone } name="phone" onChange={onChange}/>
            <h3>인증번호</h3>
            <input type="text" value={authNum} name="authNum" onChange = {onChange}/>
            <h3>hidden</h3>
            <span>{random}</span>
            {/* 
            <h3>휴대폰번호</h3>
            <input type="text"/>   <input type="text" />
            <div>
                <h3>인증번호</h3>
                <input type="text" /> <input type="text" />
            </div> */}
            <br />
            <br />
            <button >인증하기</button>
            <button onClick = {() => getCheck() } >테스트하기</button>
            <button onClick = {() => lastCheck()} >마지막 </button>

        </>
    )
}

export default LoginForm;