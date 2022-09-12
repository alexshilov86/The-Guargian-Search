import React from "react";
import './style.css'

function Search_box(props) {
    return(
        <div>
            <p>{props.data.id}</p>
        </div>
    )
}

function Search_table(props) {
    return(
        <div>
            {props.data.map(e => <Search_box data={e}/>)}
        </div>
    )
}
export default Search_table;