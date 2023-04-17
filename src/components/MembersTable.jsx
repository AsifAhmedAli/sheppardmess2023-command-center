
import Delete from '../images/icon/delete.png'
import React, { useState } from 'react';
import { range } from 'lodash'; // For generating pagination numbers


const MembersTable = () => {
    const [activePage, setActivePage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    // Constants for pagination
    const data = [15,20,20]  // please remove this later, this is just for testing purpose and add real data here
  const PER_PAGE = 4;
  const TOTAL_PAGES = Math.ceil(data.length / PER_PAGE); // Function to handle pagination click
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
<div className='px-5 py-2'>
<table className="w-full">
      <thead>
        <tr>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2">Name</th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2">Auth</th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2">Roll</th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2">Date Joined</th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td className="w-[416px] h-[80px] py-[16px] px-[20px] bg-[#1A1D29] border-b border-b-[#464665]">
            <div className='flex items-center'>
            <img src="./memberimage1.png" alt="Avatar" className="w-[40px] h-[40px] rounded-full mr-2" />
            <div className='flex flex-col'>
                <p className='text-[#FFFFFF] text-[18px] leading-[18px] font-medium '>Thomas Newbie</p>
                <p className='text[#A1A5B6] text-[18px] leading-[18px] font-normal'>mockmedia.com</p>

            </div>

            </div>
          </td>
          <td className="w-[192px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Bitbucket</td>
          <td className="w-[233px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665]">
            <div className='text-[#FFFFFF] '>
                <select name="" id="" className='bg-transparent outline-none  text-[18px] leading-[18px] font-medium px-1'>
                    <option value=""  >Org Collaborator</option>
                </select>
            </div>
          </td>
          <td className="w-[192px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">31 Jan 2023</td>
          <td className="w-[149px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium">
            <button className="">
              {/* <FiTrash2 className="w-5 h-5 text-gray-500 hover:" /> */}
              <img src={Delete} alt="" className='w-[14px] h-[18px]' />
            </button>
          </td>
        </tr>
        <tr>
        <td className="w-[416px] h-[80px] py-[16px] px-[20px] bg-[#1A1D29] border-b border-b-[#464665]">
            <div className='flex items-center'>
            <img src="./memberimage2.png" alt="Avatar" className="w-[40px] h-[40px] rounded-full mr-2" />
            <div className='flex flex-col'>
                <p className='text-[#FFFFFF] text-[18px] leading-[18px] font-medium '>Thomas Newbie</p>
                <p className='text[#A1A5B6] text-[18px] leading-[18px] font-normal'>mockmedia.com</p>

            </div>

            </div>
          </td>
          <td className="w-[192px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Bitbucket</td>
          <td className="w-[233px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665]">
            <div className='text-[#FFFFFF] '>
                <select name="" id="" className='bg-transparent outline-none  text-[18px] leading-[18px] font-medium px-1'>
                    <option value=""  >Org Collaborator</option>
                </select>
            </div>
          </td>
          <td className="w-[192px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">31 Jan 2023</td>
          <td className="w-[149px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium">
            <button className="">
              {/* <FiTrash2 className="w-5 h-5 text-gray-500 hover:" /> */}
              <img src={Delete} alt="" className='w-[14px] h-[18px]' />
            </button>
          </td>
        </tr>
        <tr>
        <td className="w-[416px] h-[80px] py-[16px] px-[20px] bg-[#1A1D29] border-b border-b-[#464665]">
            <div className='flex items-center'>
            <img src="./memberimage3.png" alt="Avatar" className="w-[40px] h-[40px] rounded-full mr-2" />
            <div className='flex flex-col'>
                <p className='text-[#FFFFFF] text-[18px] leading-[18px] font-medium '>Thomas Newbie</p>
                <p className='text[#A1A5B6] text-[18px] leading-[18px] font-normal'>mockmedia.com</p>

            </div>

            </div>
          </td>
          <td className="w-[192px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Bitbucket</td>
          <td className="w-[233px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665]">
            <div className='text-[#FFFFFF] '>
                <select name="" id="" className='bg-transparent outline-none  text-[18px] leading-[18px] font-medium px-1'>
                    <option value=""  >Org Collaborator</option>
                </select>
            </div>
          </td>
          <td className="w-[192px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">31 Jan 2023</td>
          <td className="w-[149px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium">
            <button className="">
              {/* <FiTrash2 className="w-5 h-5 text-gray-500 hover:" /> */}
              <img src={Delete} alt="" className='w-[14px] h-[18px]' />
            </button>
          </td>
        </tr>
          <tr className=''>
        <td className="w-[416px] h-[80px] py-[16px] px-[20px] bg-[#1A1D29] rounded-bl-3xl">
            <div className='flex items-center'>
            <img src="./memberimage4.png" alt="Avatar" className="w-[40px] h-[40px] rounded-full mr-2" />
            <div className='flex flex-col'>
                <p className='text-[#FFFFFF] text-[18px] leading-[18px] font-medium '>Thomas Newbie</p>
                <p className='text[#A1A5B6] text-[18px] leading-[18px] font-normal'>mockmedia.com</p>

            </div>

            </div>
          </td>
          <td className="w-[192px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29]  text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Bitbucket</td>
          <td className="w-[233px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29]">
            <div className='text-[#FFFFFF] '>
                <select name="" id="" className='bg-transparent outline-none  text-[18px] leading-[18px] font-medium px-1'>
                    <option value=""  >Org Collaborator</option>
                </select>
            </div>
          </td>
          <td className="w-[192px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29]  text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">31 Jan 2023</td>
          <td className="w-[149px] h-[80px] py-[16px] px-[12px] bg-[#1A1D29]  text-[#FFFFFF] text-[18px] leading-[18px] font-medium rounded-br-3xl">
            <button className="">
              {/* <FiTrash2 className="w-5 h-5 text-gray-500 hover:" /> */}
              <img src={Delete} alt="" className='w-[14px] h-[18px]' />
            </button>
          </td>
        </tr>
        
  </tbody>
</table>
<div className='w-[1100px] h-[1px] bg-[#464665] mx-5'></div>
<div className='flex justify-end mt-5'>
  {renderPagination()}
  </div>
</div>

);
};

export default MembersTable

