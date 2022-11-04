import { useContext, useState } from "react";
import ClotheContext from "../../Context/ClothesContext";
import noImage from '../../assets/img/no-image.svg'

function ListItem({ savivaldybe }){

    const { setModalComment, comments } = useContext(ClotheContext);

    return(
        <div className="card-item">
            <div className="card-image-container card-img-top">
                {savivaldybe.img ?
                <img src={savivaldybe.img} alt={savivaldybe.title}></img> :
                <img src={noImage} alt='no imeg'></img>}
            </div>
            <div className="list-group">
                <div className="card-text list-group-item">
                    <span className="card-price">{savivaldybe.title}</span>
                </div>
                <button className="btn card-btn list-group-item" onClick={() => setModalComment(savivaldybe)}>Select</button>
                <hr></hr>
                <div className="comments">
                    <div className="comment-container">
                        <h3>Komentarai</h3>
                    </div>
                    {comments?.map(c => (c.sav_id === savivaldybe.id) && (c.isConfirmed) ? 
                    <div key={c.id} className="comment-block">
                        <h4>Autorius: Anonymous</h4>
                        <h4>Sritis: {c.title}</h4>
                        <span>{c.text}</span>
                    </div>
                    : null)}
                </div>
            </div>
        </div>
    );
}

export default ListItem;