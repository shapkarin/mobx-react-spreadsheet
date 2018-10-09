import React from 'react';
import Cell from './Cell';
import { observer } from 'mobx-react';
import { RowProps, Icon } from './types';

@observer
export default class Row extends React.Component<RowProps> {
  icons: Icon[];
  fields: string[];

  constructor(props: RowProps) {
    super(props);
    this.icons = this.props.options.icons;
    this.fields = this.icons.map(item => item.field);
  }

  determineDisplay = (value, field) => {
    const index = this.fields.indexOf(field);

    if (index !== -1) {
      if (value) {
        return <img src={this.icons[index].image} />;
      }
    } else {
      return value;
    }
  }

  editCell = (value: string, field: string): void => {
    this.props.rowData[field] = value;
  }

  cells = () => {
    const result: JSX.Element[] = [];
    let value: string = '';
    const { className } = this.props.options;
    //console.log(className);

    for (let key in this.props.rowData) {
      // not reusable
      if (key !== '_red') {
        value = this.determineDisplay(this.props.rowData[key], key);
        result.push(
          <Cell
            editCell={this.editCell}
            value={value}
            field={key}
            booleanFields={this.fields}
            {...className}
          />
        );
      }
    }

    // className is not reusable
    result.push(
      <td
        className={`${className}_Cell Table_Cell__removeRow`}
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
