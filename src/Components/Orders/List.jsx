import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { setDeleteOrder, setUpdateComment, comments } = useContext(ClotheContext);

    if(!comments){
        return <div><h1>Please wait...</h1></div>
    }

    return(
        <div className="list myOrder-list">
            <div className="stats-container">
                <h2 className="list-title">Komentarai</h2>
            </div>
            {comments !== 'error' ?
            <div className="list-container">
                <div className="list-header-container list-item">
                    <span className="list-header list-item-id">ID</span>
                    <span className="list-header list-item-size myOrder-header-size">Savivaldybes pavadinimas</span>
                    <span className="list-header list-header-comment">Paslauga</span>
                    <span className="list-header myOrder-header-type">Komentaras</span>
                    <span className="list-header myOrder-header-status">Status</span>
                </div>
                {comments?.map(c => <ListItem key={c.id} comment={c} 
                                                    setDeleteOrder={setDeleteOrder} 
                                                    setUpdateComment={setUpdateComment} />)}
            </div>
            : <h3>Nepavyko gauti duomenu</h3>}                      
        </div>
    );
}

export default List;