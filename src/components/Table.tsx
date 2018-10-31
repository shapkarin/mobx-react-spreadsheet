import React from 'react';
import Row from './Row';
import { observer } from 'mobx-react';
// import { TableProps } from './types';

const Table = observer(({ store, options }) =>
  <table className="Table">
    <thead>
      <tr>
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

export default Table;
