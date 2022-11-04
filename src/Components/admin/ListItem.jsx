import noImage from '../../assets/img/no-image.svg';
import del from '../../assets/img/x.svg';

function ListItem({ savivaldybe, setModalDelete }){
    return(
        <div className="list-item list-item-clothes row align-items-center text-center h-35 p-3">
            <span className='col'>{savivaldybe.id}.</span>
            {savivaldybe.img ?
            <img src={savivaldybe.img} alt={savivaldybe.title}></img>
            :
            <img src={noImage} alt='no imeg'></img>
            }
            <span>{savivaldybe.title}</span>
            <button className="btn" onClick={() => setModalDelete(savivaldybe)}>Delete</button>
            <img className="create-btn-top" src={del} alt="Delete" onClick={() => setModalDelete(savivaldybe)}></img>
        </div>
    );
}

export default ListItem;