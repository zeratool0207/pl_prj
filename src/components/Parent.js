import React, { useState } from 'react'
import Child from './Child';

const Parent = (props) => {
    const [ data, setData ] = useState('initial data');
  return (
    <>
        <div> { data } </div>
        <Child setData = {setData} />
    </>
  )
}

export default Parent;