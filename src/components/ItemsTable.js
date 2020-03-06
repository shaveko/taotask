import React from "react";
import PropTypes from "prop-types";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

/**
 * Component to display data in the table
 */
export default class ItemsTable extends React.Component {
  static propTypes = {
    /** Array contains properties to display, as well as their labels for table heading */
    columnConfig: PropTypes.arrayOf(PropTypes.object),
    /** Items to display in table body */
    items: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    return (
      <table
        aria-describedby="headerText"
        role="table"
        aria-rowcount={this.props.items ? this.props.items.length : 0}
      >
        <TableHeading columnConfig={this.props.columnConfig} />
        <TableBody
          columnConfig={this.props.columnConfig}
          items={this.props.items}
        />
      </table>
    );
  }
}
