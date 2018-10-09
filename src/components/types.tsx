export interface Icon {
  field: string;
  image: string;
}

export interface Column {
  field: string;
  header: string;
}

export interface TableRow {
  symbol: string;
  bid_lp: boolean;
  bid: number;
  ask_lp: boolean;
  ask: number;
  spread: number;
  _red: boolean;
}

export interface RowProps {
  options: {
    icons: Icon[]
  };
  rowData: TableRow;
  editCell?: Function;
  removeRow: Function;
  id: number;
  className: string;
}

export interface TableProps {
  store: {
    columns: Column[];
    table: TableRow[];
    addRow: Function;
    removeRow: Function;
  };
  options: {
    icons: Icon[]
  };
}

export interface CellProps {
  value: string;
  field: string;
  editCell: Function;
  booleanFields: string[];
}

export interface CellState {
  editing:  boolean;
}
