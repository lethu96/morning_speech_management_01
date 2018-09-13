import React, {Component} from 'react';
import { get } from 'axios';
import ItemSuggest from  './ItemSuggest';

export default class SuggestUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	suggests: '',
        }
    }

    componentWillReceiveProps({ location = {} }) {
          if (location.pathname === '/index' && location.pathname !== this.props.location.pathname) {
               this.getSuggest();
          }
     }

    componentDidMount() {
    	this.getSuggest();
    }

    getSuggest() {
    	get('/api/suggest').then(response => {
            this.setState({ suggests: response.data });
        })
    }

    item()
    {
        if (this.state.suggests instanceof Array) {
            return this.state.suggests.map((suggest, i) => {
                return <ItemSuggest obj={suggest} key={i} />;
            })
        }
    }

    render() {

	    return (
	    	<div className="col-lg-3 pd-right-none no-pd">
				<div className="right-sidebar">
					<div className="suggestions full-width">
						<div className="sd-title">
							<h3>Suggestions</h3>
							<i className="fa fa-ellipsis-v"></i>
						</div>
						<div className="suggestions-list">
						{this.item()}
						</div>
					</div>
				</div>
			</div>
	    )
  	}

}
