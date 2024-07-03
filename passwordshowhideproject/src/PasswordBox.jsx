import { useState } from 'react';
import './PasswordBox.css';
let btnText = 'Show';

export function PasswordBox(){

    let [passshowhide,passshowhideSet] = useState(true);
    let toggleBtn = ()=>{
        passshowhideSet(!passshowhide);
        (passshowhide) ? btnText = 'Hide' : btnText = 'Show'
    }



    return(
        <div className="password-box">
           <input  type={(passshowhide) ? 'password' : 'text'} placeholder=' Enter Your Password' />
           <button onClick={toggleBtn}>{btnText}</button>

        </div>
    )
}