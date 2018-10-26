import React from 'react';
import Row from './Row';
import { observer } from 'mobx-react';
import { TableProps } from './types';

//you can use stateless component https://mobx.js.org/refguide/observer-component.html
@observer
export default class Table extends React.Component<TableProps> {

  render() {
    const { store, options } = this.props;

    return (
      <table className="Table">
        <thead>
          <tr>
          {/*TODO: one map for columns and tabe*/}
          {store.columns.map((item) => (
              <th className="Table_Cell">{item.header}</th>
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
            options={options}
            removeRow={store.removeRow}
          />
        ))}
        </tbody>
      </table>
    );
  }
}
