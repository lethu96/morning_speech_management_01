import React from 'react';
import {Link} from 'react-router-dom';


const List = (props) => (
  <li id={this.props.index} 
    className={ (this.props.index === this.props.count) ? 'active menu-item' : 'menu-item'} 
  >
    
      <div className="list_item_container" title={this.props.post.title}>
        <div className="label">
            <h4><Link to={"/detail-posts/" + this.props.post.id}>  { this.props.post.title  } </Link> </h4>
        </div>
      </div>
  </li>
);

export default List;