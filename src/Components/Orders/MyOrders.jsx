import Pagination from "../Pagination.jsx";
import ShowNav from "../ShowNav";
import Delete from "./Delete.jsx";
import List from "./List";

function MyOrders(){
    return(
        <>
            <ShowNav />
            <div className="my-orders">
                <List />
                <Pagination />
                <Delete />
            </div>
        </>
    );
}

export default MyOrders;