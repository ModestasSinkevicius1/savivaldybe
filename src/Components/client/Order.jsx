import { useState, useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import close from '../../assets/img/x.svg';

function Order(){

    const { setModalComment, modalComment, setNewComment, paslaugos } = useContext(ClotheContext);

    const [comment, setComment] = useState('');
    const [paslauga, setPaslauga] = useState('choose');

    if(modalComment === null){
        return null;
    }

    const createComment = () =>{
        setNewComment({
            text: comment,
            isConfirmed: 0,
            sav_id: modalComment.id,
            pas_id: paslaugos.find(p => p.title === paslauga).id,
        });
        setModalComment(null);
    }

    return(
        <div className="order">
            <div className="order-container">
                <h1>Parasyti komentara</h1>
                <img src={close} alt='Exit' className="btn-delete" onClick={() => setModalComment(null)}></img>
                <div>
                    <label htmlFor="_size">Size</label>
                    <select value={paslauga} onChange={e => setPaslauga(e.target.value)} className="input-select" id="_size" name="_size">
                        <option value={'choose'} disabled>Choose</option>
                        {paslaugos?.map(p => <option value={p.title} key={p.id}>{p.title}</option> )}  
                    </select>
                </div>
                <div className="textarea-container">
                    <label htmlFor="_textarea">Comment</label>
                    <textarea className="input-textarea" name="_textarea" id="_textarea" 
                    value={comment} onChange={e => setComment(e.target.value)}>

                    </textarea>
                </div>
                <div className="order-btn-container">
                    <button className="btn bg-light" onClick={() => setModalComment(null)}>Cancel</button>
                    {paslauga !== 'choose' ? 
                    <button className="btn bg-light" onClick={createComment}>Skelbti</button>
                    :
                    <button className="btn bg-light" disabled>Skelbti</button>
                    }    
                </div>
            </div>
        </div>
    );
}

export default Order;