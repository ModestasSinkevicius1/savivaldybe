import ShowNav from "../ShowNav";
import List from "./List";
import Delete from "../Orders/Delete";
import Create from "./Create";

function MainSavivaldybe(){
    return(
        <>
            <ShowNav />
            <div className="main-sav">
                <Create />
                <List />
                <Delete />
            </div>
        </>
    )
}

export default MainSavivaldybe;