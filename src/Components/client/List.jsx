import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";
import notFound from "../../assets/img/not-found.jpg";

function List() {
  const { savivaldybes } = useContext(ClotheContext);

  const isEmpty = () =>{
    if(savivaldybes?.find(c => c.show === true))
      return;
    return ( 
      <div className="list-container-result">
        <h2 className="list-result">Sorry requested item not found</h2>
        <img className="list-not-found-img" src={notFound} alt=''></img>
      </div>
    );
  }
  
  return (
    <div className="list">
      <h2 className="list-title-home">Paslaugu pasiulymas</h2>
      {savivaldybes !== "error" ? (
        <>
          { isEmpty() }
          <div className="card-container">
            { savivaldybes?.map(s => s.show ? <ListItem key={s.id} savivaldybe={s} /> : null) }
          </div>
        </>
      ) : (
        <h2 className="list-fail">Failed to get clothes</h2>
      )}
    </div>
  );
}

export default List;
