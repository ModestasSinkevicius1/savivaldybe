import { useContext } from "react";
import { useState } from "react";
import ClotheContext from "../../Context/ClothesContext";

function Filter(){

    const { setSavivaldybes, savivaldybes, paslaugos } = useContext(ClotheContext);

    const [sortSav, setSortSav] = useState('any');
    const [sortPas, setSortPas] = useState('any');

    const doFilter = (s) =>{
        try{
            if((s.title.toLowerCase() === sortSav || sortSav === 'any'))
                return true;
        }
        catch{
            return false;
        }      
        return false;
    }

    const filterItems = () =>{
        setSavivaldybes(savi => savi.map(s => doFilter(s) ? ({...s, show: true}) : ({...s, show: false})));
    }

    return(
        <div className="filter container">
            <div className="filter-inputs">
                <div className="filter-input-container">
                    <label>Savivaldybe</label>
                    <select className="input-select" value={sortSav} onChange={e => setSortSav(e.target.value)}>
                        <option value={'any'}>Any</option>
                        {savivaldybes?.map((s, i) => <option key={i} value={s.title.toLowerCase()}>{s.title}</option>)}
                    </select>
                </div>
                <div className="filter-input-container">
                    <label>Paslauga</label>
                    <select className="input-select" value={sortPas} onChange={e => setSortPas(e.target.value)}>
                        <option value={'any'}>Any</option>
                        {paslaugos?.map((p, i) => <option key={i} value={p}>{p.title}</option>)}
                    </select>
                </div>
                <button className="btn bg-light" onClick={filterItems}>Apply</button>
            </div>
        </div>
    )
}

export default Filter;