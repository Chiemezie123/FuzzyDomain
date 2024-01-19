import React from 'react';
import table from "./Table.module.css";

function Table({ getTableProps,getTableBodyProps,headerGroups,rows, prepareRow,}) {

  return (
    <div>
    <table {...getTableProps()} style={{ width: '100%', borderSpacing: 0 }} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: '2px solid #EAECF0',
                  padding: '15px',
                  textAlign: 'left',
                  backgroundColor: '#F5F8FA',
                  fontSize: '14px',
                  fontFamily: "Space Grotesk",
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    borderBottom: '1px solid #EAECF0',
                    padding: '15px',
                    textAlign: 'left',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  
  )
}

export default Table
