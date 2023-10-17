import React from 'react';
import Home from './components/Home';
import cartData from './components/mockData.js/cartData'
import Form from "./components/Form"
const columns = [
  {
    Header: 'A/c ID',
    accessor: 'CHG_IN_OI',
  },
  {
    Header: 'Account Name',
    accessor: 'CLOSE',
  },
  {
    Header: 'Under',
    accessor: 'CONTRACTS',
  },
  {
    Header: 'CustomerType',
    accessor: 'EXPIRY_DT',
  },
  {
    Header: 'CR/DR',
    accessor: 'HIGH',
  },
  {
    Header: 'Opening Balance',
    accessor: 'INSTRUMENT',
  },
  {
    Header: ' Address',
    accessor: 'LOW',
  },
  {
    Header: 'PhoneNumber',
    accessor: 'OPEN',
  },
  {
    Header: 'CST Reg No',
    accessor: 'OPEN_INT',
  },
  {
    Header: 'Out of State',
    accessor: 'OPTION_TYP',
  },
  {
    Header: 'Bank A/c number',
    accessor: 'SETTLE_PR',
  },
  {
    Header: 'Contact Person',
    accessor: 'STRIKE_PR',
  },
  {
    Header: "Action",
    accessor: "actions",
    Cell: ({ row }) => (
      <button
        // onClick={() => handleAction(row.original.id)}
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Action
      </button>
    ),
  }
];



const App = () => {
  return (
    <div className="App">
      <h1 style={{textAlign:"center" }}>  Customer Manager </h1>
      <div style={{border:"2px solid black",margin:"20px"}}>
          <Home columns={columns} data={cartData} />
      </div>
    </div>
  );
};

export default App;


