// import React from "react";
// import { PropTypes } from "prop-types";
// export default function UserProfile(props){

//     return(
//         <div >
        
//         <h1>User Profile</h1>
//         <h2>{props.username}</h2>
//         <h4>Age:{props.age}</h4> <br/>
//         <b>{ String(props.isLoggedIn)}</b>

//         </div>
//     )
// }

// checkPropTypes={

    // username:PropTypes.String
    
    // }
    
    
import React from 'react';
import { PropTypes } from 'prop-types';
import Styles from'./Style.module.css'
const student = (props) => {
    return (
        <div >
      <p className={Styles.names}>Student Name: {props.username}</p>
      <p>Age: {props.age}</p>
         <button onClick={props.callMe}>Press Me</button>
    </div>
  );
};

student.propTypes = {
  username: PropTypes.string,
  age: PropTypes.number
};

export default student;