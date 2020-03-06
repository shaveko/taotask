import React from "react";

/**
 * Renders table tbody, using columnConfig and items
 */
export default class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.items
          ? this.props.items.map((item, index) => {
              return (
                <TableRow
                  columnConfig={this.props.columnConfig}
                  item={item}
                  key={index}
                />
              );
            })
          : null}
      </tbody>
    );
  }
}

function TableRow(props) {
  return (
    <tr>
      {props.columnConfig
        ? props.columnConfig.map(columnConfig => {
            return (
              <td
                key={columnConfig.key}
                style={{
                  width: Math.floor(100 / props.columnConfig.length) + "%"
                }}
              >
                {props.item[columnConfig.key]}
              </td>
            );
          })
        : null}
    </tr>
  );
}
