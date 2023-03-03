import axios from 'axios';
import React, { useState } from 'react'


function LoginTest() {

    // useState 세팅
    const [ enteredId, setEnteredId ] = useState('');
    const [ enteredPw, setEnteredPw ] = useState('');
    
    const idChangeHandler = (e) => {
        setEnteredId(e.target.value);
    }

    const pwChangeHandler = (e) => {
        setEnteredPw(e.target.value);
    }

    const onKeyPress = (e) => {
        if( e.key == 'Enter' ) {
            onSubmitAccount();
        }
    }

    const checkLogin = () => {
        let state = true;
        if (enteredId == '' || enteredPw == '') {
            state = false;
            alert('아이디 또는 비밀번호를 입력해주세요.');
            return state;
        }

        if ( enteredId != '' ) {
            if ( enteredId != 'pilot' ) {
                state = false;
                alert('아이디를 확인해주세요.');
                return state;
            }
        }

        if ( enteredPw != '' ) {
            if ( enteredPw != '1234' ) {
                state = false;
                alert('비밀번호를 확인해주세요.');
                return state;
            }
        }
        return state;
    }

    const onSubmitAccount = () => {
        try {
            let loginCheckState = checkLogin();
            if ( loginCheckState ) {
                console.log('성공');
                // axios.post('/user', {
                //     id: enteredId,
                //     password: enteredPw
                //   })
                //   .then(function (response) {
                //     console.log(response);
                //   })
                //   .catch(function (error) {
                //     console.log(error);
                //   });
            }
        }


        // try {
        //     let loginCheckState = checkLogin();
        //     if(loginCheckState){
        //         AuthService.login(inputId, inputPw).then(
        //           () => {
      
        //             localStorage.setItem('loginId', JSON.stringify(inputId));
        //             history.push('/admin/GoodsApproval');
        //           },
        //           (error) => {
        //             const resMessage =
        //               (error.response &&
        //                 error.response.data &&
        //                 error.response.data.message) ||
        //               error.message ||
        //               error.toString();
        //           }
        //         );
        //     }
        //   } catch (error) {
        //     window.alert(error);
        //   }
    }



    return (
        <>
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="아이디입력"
                        onChange={idChangeHandler}
                        maxLength={10}
                    />
                    <input
                        type="password"
                        placeholder='비밀번호입력'
                        onChange={pwChangeHandler}
                        maxLength={16}
                        onKeyPress={onKeyPress}
                    />
                    <br />
                </form>
                <button 
                    onClick={}
                >로그인</button>
            </div>
        </>
    )
}

export default LoginTest