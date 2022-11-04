import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";
import ListItemService from "./ListItemService";

function ListService(){

    const { paslaugos, setModalDelete } = useContext(ClotheContext);

    return(
        <div className="list container">
            {paslaugos !== 'error' ?
            <div>
                <h2 className="list-title">Paslaugos</h2>
                { paslaugos?.map(p => <ListItemService key={p.id} paslauga={p} setModalDelete={setModalDelete} />)}
            </div>
            : <h3>Nepavyko gauti duomenu</h3>}                      
        </div>
    );
}

export default ListService;