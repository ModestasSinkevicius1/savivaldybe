import { NavLink } from "react-router-dom";

function Nav({status}) {
    return (      
            <nav className="row bg-light text-center cursor-pointer">
                <div className="nav-control">        
                    {status === 2 || status === 3 ? <NavLink end to="/home" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>         : null}
                    {status === 3 ? <NavLink to="/home/savivaldybe" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Savivaldybe</NavLink>                  : null}
                    {status === 3 ? <NavLink to="/home/services" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Paslaugos</NavLink>                  : null}      
                    {status === 3 ? <NavLink to="/home/comments" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Komentarai</NavLink> : null}   
                </div>
                <div className="col"></div>
                <div className="nav-control nav-credentials col">      
                    {status === 1 ? <NavLink end to="/login" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Login</NavLink>                       : null}                    
                    {status !== 1 ? <NavLink end to="/logout" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Logout</NavLink>                     : null}                   
                    {status === 2 ? <span className="nav-user">Client</span>                                                                                                : null}                 
                    {status === 3 ? <span className="nav-user">Admin</span>                                                                                                 : null}                                                                                                      
                </div>
            </nav>
    );
}

export default Nav;