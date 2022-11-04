import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { savivaldybes, setModalDelete } = useContext(ClotheContext);

    return(
        <div className="list container">
            {savivaldybes !== 'error' ?
            <div>
                <h2 className="list-title">Savivaldybes</h2>
           
                { savivaldybes?.map(s => <ListItem key={s.id} savivaldybe={s} setModalDelete={setModalDelete} />)}
            </div>
            : <h3>Nepavyko gauti duomenu</h3>}                      
        </div>
    );
}

export default List;