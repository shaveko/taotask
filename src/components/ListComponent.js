import React from 'react';
import ItemsTable from './ItemsTable';
import strings from '../util/strings'
import './ListComponent.css';

/**
* ListComponent is a container component, which renders ItemsTable given array of items
* Renders with "Load More" button to handle paged loading
*/
export default class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        
        if(props.items && props.items.length) {
            this.table = <ItemsTable items={props.items}/>
        }else{
            this.table = <div className='ListComponent_messageContainer'>{strings.NO_ITEMS}</div>
        }
    }

    
    render() { 
        return <div className="ListComponent_listContainer">{this.table}<button className="ListComponent_loadMoreButton" onClick={this.props.loadMore}>{strings.LOAD_MORE}</button></div>;
    } 
}