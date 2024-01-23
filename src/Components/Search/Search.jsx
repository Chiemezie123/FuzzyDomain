import React, { useEffect, useMemo,useState, useRef } from "react";
import search from "./search.module.css";
import searchLogo from "/Search_24px.png";
import ButtonTwo from "../Button/ButtonTwo";
import filter from "/Filters lines.svg";
import { useTable, useFilters } from "react-table";
import Table from "../Table/Table";
import Button from "../Button/Button";
import { Data } from "../Data/Data";
import useWindowWidth from "../Hooks/usewindow";

function Search({manRef}) {
  const [currentPage, setCurrentPage] = useState(0);
  const {windowWidth}= useWindowWidth();
  const [filterValue, setFilterValue] = useState("");
  
  const rowsPerPage = 10;
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  
  const displayData =  Data.sort((a, b) =>
  a.domain.localeCompare(b.domain, undefined, { sensitivity: 'base' })
).map((data) => ({
    ...data,
    domain: data.domain.charAt(0).toUpperCase() + data.domain.slice(1),
    location: data.location.charAt(0).toUpperCase() + data.location.slice(1),
  }));
  
  // const paginatedData = displayData.slice(startIndex, endIndex);
  const paginatedData = displayData.filter((item)=>(item.domain.toLowerCase().includes(filterValue.toLocaleLowerCase())));
  const mainData = paginatedData.slice(startIndex,endIndex);

  const columnss = [
    {
      Header: "S/N",
      accessor: (row, index) => index + 1,
      Cell: ({ cell: { value } }) => {
        return (
          <div>
            <span className={search.number}>{value}</span>
          </div>
        );
      },
    },
    {
      Header: "Domain",
      accessor: "domain",
      Cell: ({ cell: { row } }) => {
        return (
          <div className={search.link}>
            <a
              href={`https://${row.original.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className={search.domain}
            >
              <span className={search.domain}>{row.original.domain}</span>
            </a>
          </div>
        );
      },
    },
    {
      Header: "Location",
      accessor: "location",
      Cell: ({ cell: { row } }) => {
        return (
          <div>
            <span className={search.location}> {row.original.location}</span>
          </div>
        );
      },
    },
    {
      Header: "DateUploaded",
      accessor: "dateUploaded",
      Cell: ({ cell: { row } }) => {
        return (
          <div>
            <span className={search.dateUploaded}>
              {" "}
              {row.original.dateUploaded}
            </span>
          </div>
        );
      },
    },
  ];
  
  const smallColumns =[
    {
      Header: "S/N",
      accessor: (row, index) => index + 1,
      Cell: ({ cell: { value } }) => {
        return (
          <div>
            <span className={search.number}>{value}</span>
          </div>
        );
      },
    },
    {
      Header: "Domain",
      accessor: "domain",
      Cell: ({ cell: { row } }) => {
        return (
          <div className={search.link}>
            <a
              href={`https://${row.original.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className={search.domain}
            >
              <span className={search.domain}>{row.original.domain}</span>
            </a>
            <p>{row.original.location}.{row.original.dateUploaded}</p>
          </div>
        );
      },
    },
  ]

  const columns = useMemo(() => (window.innerWidth <= 600 ? smallColumns : columnss), [windowWidth]);
  const data = useMemo(() => mainData, [currentPage, filterValue]);
 

  const totalPages = Math.ceil(displayData.length / rowsPerPage);
  

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };



  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
   
  };
   
  
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setFilter, 
  } = useTable( {columns,data} , useFilters);

  

  return (
    <div>
      <div className={search.mainContainer}>
        <div className={search.firstContainer}>
          <h2>Featured domain names</h2>
        </div>
        <div className={search.secondContainer} ref={manRef}>
          <div className={search.searchContainer}>
            <div className={search.searchInput}>
              <img src={searchLogo} alt="search-logo" />
              <input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue( e.target.value)}
                placeholder="Filter by location"
              />
            </div>
            <div className={search.searchButton}>
              <ButtonTwo buttonImage={filter} text="Location" />
              <ButtonTwo buttonImage={filter} text="Date" />
            </div>
          </div>
          <div>
            <Table
              getTableProps={getTableProps}
              getTableBodyProps={getTableBodyProps}
              headerGroups={headerGroups}
              rows={rows}
              prepareRow={prepareRow}
              
            />
          </div>
          <div className={search.mainFooter}>
            <div className={search.FirstFooter} >
                <p>
                  {`${currentPage + 1} of ${totalPages}`}
                </p>
            </div>
            <div className={search.secondFooter}>
              <ButtonTwo text="previous" onClick={handlePrevPage}  />
              <ButtonTwo text="next" onClick={handleNextPage }  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
