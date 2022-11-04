import ShowNav from "../ShowNav";
import Delete from "../Orders/Delete";
import Service from "./Service";
import ListService from "./ListService";

function MainService(){
    return(
        <>
            <ShowNav />
            <div className="main-ser">
                <Service />
                <ListService />
                <Delete />
            </div>
        </>
    )
}

export default MainService;