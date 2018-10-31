import React from 'react';
import Cell from './Cell';
import { observer } from 'mobx-react';
import { RowProps, Icon } from './types';

@observer
export default class Row extends React.Component<RowProps> {
  constructor(props: RowProps) {
    super(props);
    this.icons = this.props.options.icons;
    this.fields = this.icons.map(item => item.field);
  }
  
  icons: Icon[];
  fields: string[];

  determineDisplay = (options) => {
    const { value, field } = options;
    const index = this.fields.indexOf(field);

    if (index !== -1) {
      if (value) {
        return <img src={this.icons[index].image} />;
      }
    } else {
      return value;
    }
  }

  editCell = (value, field) => {
    this.props.rowData[field] = value;
  }

  cells = () => {
    const result: JSX.Element[] = [];
    let value: string = '';

    for (let key in this.props.rowData) {
      // not reusable
      if (key !== '_red') {
        value = this.determineDisplay({value: this.props.rowData[key], field: key});
        result.push(
          <Cell
            editCell={this.editCell}
            value={value}
            field={key}
            booleanFields={this.fields}
          />
        );
      }
    }

    // className is not reusable 
    result.push(
      <td
        className="Table_Cell Table_Cell__removeRow"
        onClick={() => this.props.removeRow(this.props.id)}
      >
        delete
      </td>
    );
    return result;
  }

  render() {
    return (
      <tr className={`Table_Row ${this.props.className}`}>{this.cells()}</tr>
    );
  }
}
