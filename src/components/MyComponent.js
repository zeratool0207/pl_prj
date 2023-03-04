import React from 'react'

const MyComponent = ({ name, children }) =>  {
  return (
    <div>
        안녕하세요. {name}입니다. <br />
        children 값은 {children}
        입니다.
    </div>
  )
}

export default MyComponent