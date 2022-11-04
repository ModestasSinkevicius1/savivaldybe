import { useState } from "react";
import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";

function ListItem({ comment, setUpdateComment }){

    const { status, setModalDelete } = useContext(ClotheContext);

    const [stage, setStage] = useState(comment.isConfirmed);
    
    const updateCommentStatus = () => {
        console.log('trigger');
        setUpdateComment({
            id: comment.id,
            isConfirmed: stage,
        });
    }

    return(
        <div className="list-item">
            <span className="list-item-id">{comment.id}.</span>
            <span className="list-item-size myOrder-size">{comment.sav_name}</span>
            <span className="myOrder-comment">{comment.title}</span>
            <span className="myOrder-type">{comment.text}</span>
            {status === 3 ?
            <select className="input-select myOrder-status" value={stage} onChange={e => setStage(e.target.value)}>
                <option value={0}>Awaiting</option>
                <option value={1}>Confirm</option>
            </select> :
            <span>{comment.status}</span>}
            {status === 3 ? 
                <div className="order-control">
                    <button className="btn btn-order" onClick={() => updateCommentStatus(comment)}>Update</button>
                    <button className="btn btn-order" onClick={() => setModalDelete(comment)}>Delete</button>
                </div> 
            : null}
        </div>
    );
}

export default ListItem;