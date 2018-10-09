import React from 'react';
import Row from './Row';
import { observer } from 'mobx-react';
import { TableProps } from './types';

@observer
export default class Table extends React.Component<TableProps> {

  render() {
    const { store, options } = this.props;

    return (
      <table className={options.className}>
        <thead>
          <tr>
          {store.columns.map((item) => (
              <th className={`${options.className}_Cell`}>{item.header}</th>
          ))}
          </tr>
        </thead>
        <tfoot>
          <tr><td><button onClick={() => store.addRow()}>Add row</button></td></tr>
        </tfoot>
        <tbody>
        {store.table.map((item, idx) => (
          <Row
            rowData={item}
            key={idx}
            id={idx}
            className={item._red ? 'Row_red' : ''}
            removeRow={store.removeRow}
            {...options}
          />
        ))}
        </tbody>
      </table>
    );
  }
}
