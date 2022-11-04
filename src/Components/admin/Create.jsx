import { useContext, useRef, useState } from "react";
import ClotheContext from "../../Context/ClothesContext";
import getBase64 from "../../Functions/getBase64";
import { checkLength } from "../../Functions/doValid.js";
import delImg from '../../assets/img/x.svg';

function Create(){

    const [title, setTitle] = useState('');
    const [photoPrint, setPhotoPrint] = useState(null);

    const fileInput = useRef();

    const { setSaveData } = useContext(ClotheContext);

    const saveItem = () =>{
        setSaveData({
            title,
            img: photoPrint,
        });
        setTitle('');
        setPhotoPrint(null);
    }

    const checkInput = (e) => {
        if(checkLength(e.target.value, 20))
            setTitle(e.target.value);
        return;
    }

    const doPhoto = () => {
        getBase64(fileInput.current.files[0])
        .then(photo => setPhotoPrint(photo))
        .catch(_ => {})
    }

    return(
        <>
            <div className="create">
                <div className="new-item-container container">
                    <h2>Sukurti nauja saivaldybe</h2>
                    <div className="new-item-container-inputs">
                        <div className="new-item-label-container">
                            <label>Pavadinimas:</label>
                            <input type='text' className='input-text' value={title} onChange={e => checkInput(e)}></input>
                        </div>
                        <div className="new-item-label-container">
                            <label>Image pick:</label>
                            <div className="image-control">
                                <input type='file' ref={fileInput} className="btn file-input" onChange={doPhoto}></input>
                                {photoPrint ?
                                <div className="image-preview">
                                    <img className="remove-img" src={delImg} alt='Remove img' onClick={() => setPhotoPrint(null)}></img>
                                    <img src={photoPrint} alt='Preview'></img>
                                </div>
                                : null}
                            </div>
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

export default Create;