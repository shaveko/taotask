import React from 'react';

/**
 * This renders table heading based on columnConfig array of key=>label mapping
 */
export default class TableHeading extends React.Component {

    render() {
        return  <thead>
                    {   
                        this.props.columnConfig?<tr>{
                            this.props.columnConfig.map(descr=>{
                                let key = descr.label || descr.key;
                            return <th key={key}>{key}</th>;
                            })}</tr>
                            :null
                    }
                </thead>;
    }
    
}