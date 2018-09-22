import React, {Component} from 'react';
import { get } from 'axios';
import ItemSuggest from  './ItemSuggest';
import TopPost from './TopPost';

export default class SuggestUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	suggests: '',
            top: '',
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
    	get('/suggest').then(response => {
            this.setState({ suggests: response.data });
        })
        get('/top-post').then(response=>{
            this.setState({ top: response.data});
        })
    }

    itemSuggetsUser()
    {
        if (this.state.suggests instanceof Array) {
            return this.state.suggests.map((suggest, i) => {
                return <ItemSuggest obj={suggest} key={i} />;
            })
        }
    }

    itemTopPost()
    {
        if (this.state.top instanceof Array) {
            return this.state.top.map((top, i) => {
                return <TopPost obj={top} key={i} />;
            })
        }
    }

    render() {
	    return (
	    	<div className="col-lg-3 pd-right-none no-pd">
				<div className="right-sidebar">
                    <div className="widget widget-jobs">
                        <div className="sd-title">
                            <h3>Top Post</h3>
                            <i className="fa fa-ellipsis-v"></i>
                        </div>
                        <div className="jobs-list">
                            
                            {this.itemTopPost()}
                        </div>
                    </div>
					<div className="suggestions full-width">
						<div className="sd-title">
							<h3>Suggestions</h3>
							<i className="fa fa-ellipsis-v"></i>
						</div>
						<div className="suggestions-list">
						{this.itemSuggetsUser()}
						</div>
					</div>
				</div>
			</div>
	    )
  	}

}
