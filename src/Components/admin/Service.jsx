import { useContext, useState } from "react";
import ClotheContext from "../../Context/ClothesContext";
import { checkLength } from "../../Functions/doValid.js";

function Service(){

    const [title, setTitle] = useState('');

    const { setService } = useContext(ClotheContext);

    const saveItem = () =>{
        setService({
            title,
        });
        setTitle('');
    }

    const checkInput = (e) => {
        if(checkLength(e.target.value, 20))
            setTitle(e.target.value);
        return;
    }

    return(
        <>
            <div className="service">
                <div className="new-item-container container">
                    <h2>Sukurti nauja paslauga</h2>
                    <div className="new-item-container-inputs">
                        <div className="new-item-label-container">
                            <label>Pavadinimas:</label>
                            <input type='text' className='input-text' value={title} onChange={e => checkInput(e)}></input>
                        </div>
                        <div className="new-item-label-container">
                            <button className='btn create-btn' onClick={saveItem}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;