import React from 'react';
import { render } from 'react-dom';
import Table from './components/Table';
import store from './store';

import './style.css';

const icon = 'https://png.icons8.com/ios-glyphs/50/000000/museum.png';
const options = {
  icons: [
    {
      field: 'bid_lp',
      image: icon
    },
    {
      field: 'ask_lp',
      image: icon
    }
  ],
  className: 'Table'
};

const props = { store, options };
const App = () => <Table {...props} />;

render(<App />, document.getElementById('root'));
