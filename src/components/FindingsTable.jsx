import React, { useState } from 'react';
import { range } from 'lodash'; // For generating pagination numbers

const FindingsTable = () => {
  // Sample data for the table
  const data = [
    { id: 1, url: '_bal.com/api/abol/crm/MY/codes', parameter: '', moduleType: 'Session Strength', attackType: 'Session Strength',cvss:'5.1',severity:'High',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 1',status:'Unreviewed' },
    { id: 2, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Set-Cookie: 3_', moduleType: 'Blind NoSQLi', attackType: 'XSS',cvss:'4.1',severity:'High',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 2',status:'Verified' },
    { id: 3, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Directory[2]', moduleType: 'Browser Cache', attackType: 'XSS',cvss:'7.8',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 3',status:'False Positive' },
    { id: 3, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Directory[2]', moduleType: 'Browser Cache', attackType: 'XSS',cvss:'7.8',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 3',status:'False Positive' },
    { id: 3, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Directory[2]', moduleType: 'Browser Cache', attackType: 'XSS',cvss:'7.8',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 3',status:'False Positive' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    { id: 4, url: '_bal.com/api/abol/crm/MY/codes', parameter: 'Input', moduleType: 'Session Fixation', attackType: 'CSPHeaders',cvss:'3.5',severity:'Medium',firstDiscovered:'03/01/23 11:47 AM' ,lastDiscovered:'03/01/23 11:47 AM',app:'Application 4',status:'unreviewed' },
    
  ];

  // States for managing selected rows and active page
  const [selectedRows, setSelectedRows] = useState([]);
  const [activePage, setActivePage] = useState(1);

  // Constants for pagination
  const PER_PAGE = 4;
  const TOTAL_PAGES = Math.ceil(data.length / PER_PAGE);

  // Function to handle checkbox click for a row
  const handleRowCheckboxClick = (id) => {
    const isSelected = selectedRows.includes(id);
    setSelectedRows(isSelected ? selectedRows.filter((rowId) => rowId !== id) : [...selectedRows, id]);
  };

  // Function to handle checkbox click for all rows
  const handleSelectAllCheckboxClick = () => {
    setSelectedRows(selectedRows.length === data.length ? [] : data.map((row) => row.id));
  };

  // Function to handle pagination click
  const handlePageClick = (page) => {
    setActivePage(page);
  };

  // Function to get the visible rows based on active page and PER_PAGE
  const getVisibleRows = () => {
    const start = (activePage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return data.slice(start, end);
  };

// Function to render pagination
const renderPagination = () => {
  const pages = [];

  // Add Previous button
  pages.push(
    <button
      key="prev"
      onClick={() => handlePageClick(activePage - 1)}
      disabled={activePage === 1}
      className="px-3 py-1 text-white text-[18px] leading-[20px] font-medium"
    >
      <span className='pr-3 text-center'>{"<"}</span> {"Previous"}
    </button>
  );

  // Add page numbers
  if (activePage < 4) {
    for (let page = 1; page <= 3; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 text-white rounded-lg bg-transparent ${
            activePage === page ? "bg-gradient-to-br from-[#219199] to-[#61C3CB] text-white" : ""
          }`}
        >
          {page}
        </button>
      );
    }
    if (TOTAL_PAGES > 3) {
      pages.push(<span key="dots1" className='text-white text-[16px] leading-[20px] font-medium'>...</span>);
    }
    for (let page = TOTAL_PAGES - 2; page <= TOTAL_PAGES; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 rounded-lg bg-transparent text-white ${
            activePage === page ? "bg-gradient-to-br from-[#219199] to-[#61C3CB] text-white" : ""
          }`}
        >
          {page}
        </button>
      );
    }
  } else if (activePage > TOTAL_PAGES - 3) {
    for (let page = 1; page <= 3; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 rounded-lg bg-transparent text-white ${
            activePage === page ? "bg-gradient-to-br from-[#219199] to-[#61C3CB] text-white" : ""
          }`}
        >
          {page}
        </button>
      );
    }
    if (TOTAL_PAGES > 3) {
      pages.push(<span key="dots1" className='text-white text-[16px] leading-[20px] font-medium'>...</span>);
    }
    for (let page = TOTAL_PAGES - 2; page <= TOTAL_PAGES; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 rounded-lg bg-transparent text-white ${
            activePage === page ? "bg-gradient-to-br from-[#219199] to-[#61C3CB] text-white" : ""
          }`}
        >
          {page}
        </button>
      );
    }
  } else {
    for (let page = activePage - 1; page <= activePage + 1; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 rounded-lg bg-transparent text-white ${
            activePage === page ? "bg-gradient-to-br from-[#219199] to-[#61C3CB] text-white" : ""
          }`}
        >
          {page}
        </button>
      );
    }
    if (TOTAL_PAGES > 6) {
      pages.push(<span key="dots1" className='text-white text-[16px] leading-[20px] font-medium'>...</span>);
    }
    for (let page = TOTAL_PAGES - 2; page <= TOTAL_PAGES; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 rounded-lg bg-transparent text-white ${
            activePage === page ? "bg-gradient-to-br from-[#219199] to-[#61C3CB] text-white" : ""
          }`}
        >
          {page}
        </button>
      );
    }
  }

  // Add Next button
  pages.push(
    <button
      key="next"
      onClick={() => handlePageClick(activePage + 1)}
      disabled={activePage === TOTAL_PAGES}
      className="px-3 py-1 text-white text-[18px] leading-[20px] font-medium"
    >
      {"Next"} <span className='pl-3 text-center'> {">"}</span>
    </button>
  );

  return pages;
};
  
            

  return (
    <>
      <div className='flex items-center justify-between my-5'>
        <div className='flex items-center gap-5'>
        <div className='h-[30px] w-[30px] bg-[#1A1E29] ml-3 rounded'>
               <input
                  type="checkbox"
                  // checked={selectedRows.length === data.length}
                  // onChange={handleSelectAllCheckboxClick}
                  className="h-[30px] w-[30px] rounded border border-[#D1D5DB] outline-none accent-[#1A1E29]"
                />
               </div>
               <div className='w-[250px] h-[45px] border border-[#C3C3C3] bg-transparent rounded-[3px] px-[16px] py-[10px]'>
    <select name="" id="" className='bg-transparent outline-none focus:outline-none pr-15 text-[#FFFFFF] text-[16px] font-normal leading-[22px]'>
        <option value="">Change Severity</option>
    </select>
    </div>
    <div className='w-[250px] h-[45px] border border-[#C3C3C3] bg-transparent rounded-[3px] px-[16px] py-[10px]'>
    <select name="" id="" className='bg-transparent outline-none focus:outline-none pr-15 text-[#FFFFFF] text-[16px] font-normal leading-[22px]'>
        <option value="">Change Status</option>
    </select>
    </div>
    <div className='w-[250px] h-[45px] border border-[#C3C3C3] bg-transparent rounded-[3px] px-[16px] py-[10px]'>
    <select name="" id="" className='bg-transparent outline-none focus:outline-none pr-15 text-[#FFFFFF] text-[16px] font-normal leading-[22px]'>
        <option value="">Export Vulnerability</option>
    </select>
    </div>
        </div>
        <div className='w-[105px] h-[44px] rounded-[5px] text-center bg-transparent text-[18px text-[#FFFFFF] leading-[22px] font-normal flex justify-end items-center mr-3'>
          <button className=''>Clear All</button>
        </div>
      </div>
      <div className="w-[1540px] h-[364px] mt-2">
        <table className="w-[1540px] rounded">
          <thead className="bg-[#13141B] text-[#FFFFFF] text-[14px] leading-[18px] font-medium h-[44px]">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-tl-3xl ">
               <div className='h-[20px] w-[20px] bg-[#1A1E29]'>
               <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={handleSelectAllCheckboxClick}
                  className="h-[20px] w-[20px] rounded border border-[#D1D5DB] outline-none accent-[#1A1E29]"
                />
               </div>
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
                URL
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
                Parameter
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
              Module Type
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
              Attack Type
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
              CVSS
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
              Severity
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
              First Discovered
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
              Last Discovered
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium ">
              App
              </th>
              <th scope="col" className="text-[14px] text-[#FFFFFF] leading-[18px] font-medium  rounded-tr-3xl ">
              Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-[#1A1D29]">
            {getVisibleRows().map((row,index) => (
              <tr key={row.id} className={selectedRows.includes(row.id) ? 'bg-gray-100 ' : ''}>
                <td className="px-6 py-4 w-[52px] h-[80px] p-4 border border-[#464665]">
               
               <div className='h-[20px] w-[20px] bg-[#1A1E29]'>
               <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowCheckboxClick(row.id)}
                    className="h-[20px] w-[20px] rounded border border-[#D1D5DB] outline-none accent-[#1A1E29]"
              />
               </div>
            </td>
            <td className="text-[18px] leading-[18px] font-medium text-[#70D0D8] w-[218px] h-[80px] py-[16px] px-[20px] border border-[#464665] ">{row.url}</td>
            <td className="text-[18px] leading-[18px] font-medium text-[#FFFFFF] w-[156.2px] h-[80px] py-[16px] px-[12px] border border-[#464665]">{row.parameter}</td>
            <td className="text-[18px] leading-[18px] font-medium text-[#FFFFFF]  w-[156.2px] h-[80px] py-[16px] px-[12px] border border-[#464665]">{row.moduleType}</td>
            <td className="text-[18px] leading-[18px] font-medium text-[#FFFFFF]  w-[156.2px] h-[80px] py-[16px] px-[12px] border border-[#464665]">{row.attackType}</td>
            <td className="text-[18px] leading-[18px] font-medium text-[#FFFFFF]  w-[71px] h-[80px] py-[16px] px-[12px] border border-[#464665]">{row.cvss}</td>
            {/* <td className="text-[18px] leading-[18px] font-medium">{row.severity}</td> */}
            <td className={`text-[18px] leading-[18px] font-medium  w-[104px] h-[80px] py-[16px] px-[12px] border border-[#464665] ${index < 1 ? 'text-[#FF0000]' : 'text-[#FEAA10]'}`}>{row.severity}</td>
            <td className="text-[18px] leading-[18px] font-medium text-[#FFFFFF]  w-[173px] h-[80px] py-[16px] px-[12px] border border-[#464665]">{row.firstDiscovered}</td>
            <td className="text-[18px] leading-[18px] font-medium text-[#FFFFFF]  w-[156.2px] h-[80px] py-[16px] px-[12px] border border-[#464665]">{row.lastDiscovered}</td>
            <td className="text-[18px] leading-[18px] font-medium text-[#FFFFFF]  w-[156.2px] h-[80px] py-[16px] px-[12px] border border-[#464665]">{row.app}</td>
            {/* <td className="text-[18px] leading-[18px] font-medium">{row.status}</td> */}
           
            <td className={`text-[18px] leading-[18px] font-medium  w-[128px] h-[80px] py-[16px] px-[12px] border border-[#464665] ${row.status === 'Unreviewed' ? 'text-[#FEAA10]' : row.status === 'Verified' ? 'text-[#16E32B]' : row.status === 'False Positive' ? 'text-[#FF0000]' : row.status === 'unreviewed' ? 'text-[#70D0D8]' : ''}`}>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
  <div className='flex justify-end mt-80'>
  {renderPagination()}
  </div>

 
</>
);
};

export default FindingsTable;