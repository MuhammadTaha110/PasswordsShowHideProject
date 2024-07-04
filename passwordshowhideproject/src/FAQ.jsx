import { useState } from 'react';
import './FAQ.css';
import {questions} from './Questions.js';

export function FAQ(){
    let [getQusetion,setQuestion] = useState(false);

    let [showAns,setshowAns] = useState(questions[0].id);
  

    
    return(
        <div id='FAQ' className='faq-outer-div'>

            <h1>FAQ's</h1>
            {
                questions.map((value,index)=>{
                    return(
                        <div className="faq-inner-div" onClick={()=>{
                            setshowAns(value.id);
                        }} >
                            <h1 >{value.Question}</h1>
                            <p className={`paragraph ${showAns==value.id ? 'faq-inner-div-p-show' : ''}`}>{value.Answer}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}