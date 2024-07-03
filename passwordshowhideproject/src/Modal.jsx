import { useState } from 'react';
import './Modal.css';
export function Modal() {

    let [modal,modalSet] = useState(false);

    let togglerBtn = () => {
        modalSet(!modal);
    }

    return (

        <div className='modal-div'>
           <div className="modal-btn" onClick={togglerBtn} >Click To See Modal</div>
            <div className={`modal ${modal ? 'modal-show' : ''}`}>
                <button className='crossBtn' onClick={()=>{
                    modalSet(false)
                }}>&times;</button>
                <h1>This is Modal</h1>

            </div>



        </div>
    )
}