import { observable } from "mobx";

import sample from "./sample";
import times from "./times";

const samples = [];
times(15)(() => samples.push(sample()));

class Store {
  @observable table = samples.slice();
  columns = [
    { field: "symbol", header: "Symbol" },
    { field: "bid_lp", header: "Bid LP" },
    { field: "bid", header: "Bid" },
    { field: "ask_lp", header: "Ask LP" },
    { field: "ask", header: "Ask" },
    { field: "spread", header: "Spread" }
  ];

  addRow = () => {
    this.table.push({
      symbol: "",
      bid_lp: "",
      bid: "",
      ask_lp: "",
      ask: "",
      spread: ""
    });
  };

  removeRow = i => {
    this.table.splice(i, 1);
  };
}

const appStore = new Store();

export default appStore;
