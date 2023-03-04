import React from 'react'

const Child = (props) => {
  return (
    <>
        <button onClick={() => props.setData('data from child')}>
            send data to parent
        </button>
    </>
  )
}

export default Child