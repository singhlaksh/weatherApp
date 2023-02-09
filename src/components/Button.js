import React from 'react'

function Button({title,value,setValue, ...props}) {
  // This function defines a React component called "Button"
  // It takes in an object destructured with several props
  // - title : a string for the title of the button
  // - value : a value of any type that can be associated with the button
  // - setValue : a function that can set the value of the button
  // - ...props: the rest of the props passed to this component
  return (
    <div {...props} className={`button`} >
        {title}
    </div>
  )
}

export default Button

