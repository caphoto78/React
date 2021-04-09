import React from 'react'

const ValidationComponent = (props) => {
    let validationMessage = null;
    if (props.inputLength < 5) {
      validationMessage = 'The text is too short!'
    } else {
      validationMessage = 'The text is long enough!'
    }
  return (
    <div>
      <p>{ validationMessage }</p>
    </div>
  )
}

export default ValidationComponent
