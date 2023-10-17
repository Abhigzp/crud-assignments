import React, { useMemo,useState } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import Form from "./Form"

Modal.setAppElement('#root');
const Home = ({ columns, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const handleFilterChange = (e) => {
    const value = e.target.value || '';
    setGlobalFilter(value);
  };


    
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
      <div  style={{display:"flex",justifyContent:"space-between",}}>
        <div>
          <h3 style={{textAlign:"center",marginTop: "20px",marginLeft:"5px"}}>Customer report</h3>
        </div>
      

      <div style={{display:"flex",justifyContent:"space-between", margin:"20px" ,width:"30%"}}>
        <input value={globalFilter || ''} onChange={handleFilterChange} placeholder="Search..." />
        <button type="button" class="btn btn-primary btn-sm" onClick={openModal}> Add Customer</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Item Modal"
      >
        <Form closeModal={closeModal} />
      </Modal>
      </div> 
      </div>
     
      

      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-4 flex flex-wrap justify-between">
        <div style ={{display:"flex",justifyContent:"space-between"}}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="responsive-button">
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="responsive-button">
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage} className="responsive-button">
          {">"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="responsive-button">
          {">>"}
        </button>
        <span className="mt-1">
          Page <strong>{pageIndex + 1}</strong>
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="p-2 border rounded responsive-select"
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </div>
       
      </div>
    </div>
  );
};

export default Home;

