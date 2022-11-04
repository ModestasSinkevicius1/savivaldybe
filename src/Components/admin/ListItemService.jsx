import noImage from '../../assets/img/no-image.svg';
import del from '../../assets/img/x.svg';

function ListItemService({ paslauga, setModalDelete }){
    
    return(
        <div className="list-item list-item-clothes row align-items-center text-center h-35 p-3">
            <span className='col'>{paslauga.id}.</span>
            <span>{paslauga.title}</span>
            <button className="btn" onClick={() => setModalDelete(paslauga)}>Delete</button>
            <img className="create-btn-top" src={del} alt="Delete" onClick={() => setModalDelete(paslauga)}></img>
        </div>
    );
}

export default ListItemService;