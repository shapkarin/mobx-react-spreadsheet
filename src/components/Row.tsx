import React from "react";
import Cell from "./Cell";
import { observer } from "mobx-react";

@observer
export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.icons = this.props.options.icons;
    this.fields = this.icons.map(item => item.field);
  }

  determineDisplay = (value, field) => {
    let result = "";
    const index = this.fields.indexOf(field);

    if (index !== -1) {
      if (value) {
        result = <img src={this.icons[index].image} />;
      }
    } else {
      result = value;
    }
    return result;
  };

  editCell = (value, field) => {
    this.props.rowData[field] = value;
  };

  cells = () => {
    const result = [];
    let value = "";

    for (let key in this.props.rowData) {
      // not reusable
      if (key !== "_red") {
        value = this.determineDisplay(this.props.rowData[key], key);
        result.push(
          <Cell
            onChangedValue={this.props.handleChangedCell}
            updateCells={this.props.updateCells}
            editCell={this.editCell}
            value={value}
            field={key}
            booleanFields={this.fields}
          />
        );
      }
    }
    result.push(
      <td
        className="Table_Cell Table_Cell__removeRow"
        onClick={() => this.props.removeRow(this.props.id)}
      >
        delete
      </td>
    );
    return result;
  };

  render() {
    return (
      <tr className={`Table_Row ${this.props.className}`}>{this.cells()}</tr>
    );
  }
}
