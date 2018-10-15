import React from 'react';
import {Link} from 'react-router-dom';


const List = (props) => (
    <li id={props.index} 
        className={ (props.index === props.count) ? 'active menu-item' : 'menu-item'} 
    >
    
        <div className="list_item_container" title={props.post.title}>
            <div className="label">
                <h4><Link to={"/detail-posts/" + props.post.id}>  { props.post.title  } </Link> </h4>
            </div>
        </div>
    </li>
);

export default List;
