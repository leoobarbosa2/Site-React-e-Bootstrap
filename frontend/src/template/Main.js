import React from 'react'
import Header from './Header'

export default props =>
    <div className="container my-5">
        <Header {...props} />
        {props.children}
    </div>
   
    