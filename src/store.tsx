import { observable } from 'mobx';

import sample from './sample';
import times from './times';
import { TableRow } from './components/types';

const samples: TableRow[] = [];
times(15)(() => samples.push(sample()));

class Store {
  @observable table: TableRow[] = [];

  columns = [
    { field: 'symbol', header: 'Symbol' },
    { field: 'bid_lp', header: 'Bid LP' },
    { field: 'bid', header: 'Bid' },
    { field: 'ask_lp', header: 'Ask LP' },
    { field: 'ask', header: 'Ask' },
    { field: 'spread', header: 'Spread' }
  ];
  constructor(data: TableRow[]) {
    this.table = data.slice();
  }

  addRow = () => {
    this.table.push({
      symbol: '',
      bid_lp: false,
      bid: 0,
      ask_lp: false,
      ask: 0,
      spread: 0,
      _red: false,
    });
  }

  removeRow = i => {
    this.table.splice(i, 1);
  }
}

const appStore = new Store(samples);

export default appStore;
