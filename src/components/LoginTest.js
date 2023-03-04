import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function LoginTest() {

    // useState 세팅
    const [ enteredId, setEnteredId ] = useState('');
    const [ enteredPw, setEnteredPw ] = useState('');

    let navigate = useNavigate();
    
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
        // try {
            let loginCheckState = checkLogin();
            if ( loginCheckState ) {
                console.log('성공');
                navigate('/countup');
            } else {
                console.log('실패');
            }



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


            //     const axios = require('axios');

            //     // 지정된 ID를 가진 유저에 대한 요청
            //     axios.get('/user?ID=12345')
            //     .then(function (response) {
            //         // 성공 핸들링
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         // 에러 핸들링
            //         console.log(error);
            //     })
            //     .finally(function () {
            //         // 항상 실행되는 영역
            //     });

            //     // 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
            //     axios.get('/user', {
            //         params: {
            //         ID: 12345
            //         }
            //     })
            //     .then(function (response) {
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     })
            //     .finally(function () {
            //         // 항상 실행되는 영역
            //     });  

            //     // async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
            //     async function getUser() {
            //     try {
            //         const response = await axios.get('/user?ID=12345');
            //         console.log(response);
            //     } catch (error) {
            //         console.error(error);
            //     }
            //     }
            // }
        // }


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
                    onClick={onSubmitAccount}
                >로그인</button>
            </div>
        </>
    )
}

export default LoginTest;