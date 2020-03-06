import React from 'react';
import ItemsTable from './ItemsTable';
import strings from '../util/strings'
import constants from '../util/const';
import './ListComponent.css';

/**
* ListComponent is a container component, which renders ItemsTable 
* with the array of items got from provider
* Renders with "Load More" button to handle paged loading
*/
export default class ListComponent extends React.Component {

    constructor(props) {
        super(props);

        //setup initial state
        this.state = {
            loadig: false,
            limit: props.limit || constants.DEFAULT_LIMIT,
            offset: props.offset || constants.DEFAULT_OFFSET,
            errorMessage: null

        }
    }

    //setup states' items and columnConfig on props update
    componentWillReceiveProps(nextProps) {
      this.setState({ 
          items: nextProps.items || [],
          columnConfig: nextProps.columnConfig || null
        });  
    }

    //here we request for initial list of users
    componentDidMount() {
        this.setState({loading: true});

        this.props.dataProvider.loadItems()
        .then(this.fetchingDone)
        .catch(e=>this.setState({errorMessage: e.message}));

    }


    //update state with new retrieved data
    fetchingDone = (items) => {
        this.setState(prevState=>{
            
            let mergedItems;
            if(prevState.items && items) {
                mergedItems = [...prevState.items, ...items];
            }else{
                mergedItems = items;
            }
            let columnConfig = setupColumnConfig({columnConfig: this.props.columnConfig, items: mergedItems}) 
            return {
                items: mergedItems,
                loading: false,
                columnConfig,
                offset: prevState.offset + prevState.limit,
            }
        });
    }

    /**
     * Loading next page, updating offset, disabling loadMore while fetching
     */
    loadMore = ()=>{
        //do not react on LoadMore click while fecthing of data is in progress
        if(this.state.loading) return;  

        //set loading to true and reset errors
        this.setState({
            loading: true,
            errorMessage: ''
        });

        //load data from dataProvider
        this.props.dataProvider.loadItems(this.state.offset, this.state.limit)
        .then(this.fetchingDone)
        .catch(e=>this.setState({errorMessage: e.message}));        
    }

    
    render() { 
        return  <div className="ListComponent_listContainer">
                    <header className="App-header">
                        <p id="headerText">
                            {this.props.header}
                        </p>
                    </header>
                    <ItemsTable items={this.state.items} columnConfig={this.state.columnConfig} caption={this.props.caption}/>
                    <button 
                        className="ListComponent_loadMoreButton" 
                        onClick={this.loadMore} 
                        tabIndex={this.state.loading?-1:0}>
                            {strings.LOAD_MORE}
                    </button>
                    <div role="alert" className='errorBox'>{this.state.errorMessage}</div>
                </div>;
    } 
}

//column config ought to be optioal, so lets try to use object keys as column captions
function setupColumnConfig(props) {
    let columnConfig = null;
        
    if(!props.columnConfig) {
        if(props.items && props.items.length) {
            columnConfig = Object.keys(props.items[0]).map(key=>{return {
                key: key,
                label: key
            }})
        }
    }else{
        columnConfig = props.columnConfig;
    }

    return columnConfig;
}
