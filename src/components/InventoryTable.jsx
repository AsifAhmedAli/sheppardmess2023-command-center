
import React, { useState } from 'react';
import { range } from 'lodash'; // For generating pagination numbers


const InventoryTable = () => {
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
        <>      
          <div className='flex items-center justify-between'>
           <div className='flex'>
           <div className='w-[151px] h-[44px] border border-[#C3C3C3]  rounded-[3px] pl-[4px]  py-[10px] bg-[#181A25]'>
                <select name="" id="" className='outline-none focus:outline-none px-[10px] pr-[44px]  text-[#FFFFFF] text-[16px] font-normal leading-[22px] bg-[#181A25]'>
                    <option value="">Sort By</option>
                </select>
            </div>
           </div>
           <div>
            <button className='text-[#FFFFFF] text-[18px] leading-[22px] font-bold bg-[#FF0000] py-[8px] px-[12px] rounded-[2.29px]'>Export CSV</button>
           </div>
        </div>
        {/* Table */}

        <div className='py-6'>
<table className="w-[1528px]">
      <thead className='bg-[#13141B] h-[44px]'>
        <tr className=''>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2 rounded-tl-3xl "></th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2">Created</th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2">Updated</th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2"></th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2"></th>
          <th className="border-b  border-b-[#464665] text-[#FFFFFF] text-[14px] leading-[18px] text-start px-5 py-2 rounded-tr-3xl">Risk Classifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td className="w-[368px] h-[121px] py-[16px] px-[20px] bg-[#1A1D29] border-b border-b-[#464665]">
       <h1 className='text-[#FFFFFF] text-[18px] leading-[24px] font-medium'> Application1 A - <span className='text-[#2B9AA1]'>248</span> Valnerabilities</h1>
       <div className='flex justify-between'>
       {/* 1st */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>2</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#FF0000] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>CRITICAL</button>
        </div>
        {/* 2nd */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>79</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#983A1E] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>Medium</button>
        </div>
        {/* 3rd */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>94</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#FEAA10] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>High</button>
        </div>
       </div>
          </td>
          <td className="w-[200px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Feb 22, 2021</td>
          <td className="w-[200px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Feb 22, 2021</td>
          
          <td className="w-[212px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">
            <div className='flex items-center gap-19'>
                <div>
                <img src="./icons/polygon1.png" alt="PolyGon Icon" />
                </div>
                <div className='flex items-center justify-between gap-1'>
                <div><h1 className='text-[16px] text-[#5E5F5E] leading-[18px] font-medium mt-1'>+0</h1></div>
                
                <img src="./icons/information.png" alt="PolyGon Icon" />
                </div>
            </div>
          </td>
          <td className="w-[357px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665]  text-[18px] leading-[18px] font-medium">
           <div className='flex items-center'>
            <img src="./icons/shield.png" alt="shield icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/home.png" alt="Home icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/cart.png" alt="cart icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/code.png" alt="code icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/design.png" alt="Design icon" />
           </div>
          </td>
          <td className="w-[196px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">
            <button className='bg-[#FF0000] h-[33px] w[90px] rounded-[2.29px] py-[8px] px-[12px] text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold'>CRITICAL</button>
          </td>
        </tr>  
        {/* 2nd row static data*/}
        <tr>
        <td className="w-[368px] h-[121px] py-[16px] px-[20px] bg-[#1A1D29] border-b border-b-[#464665]">
       <h1 className='text-[#FFFFFF] text-[18px] leading-[24px] font-medium'> Application1 A - <span className='text-[#2B9AA1]'>248</span> Valnerabilities</h1>
       <div className='flex justify-between'>
       {/* 1st */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>2</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#FF0000] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>CRITICAL</button>
        </div>
        {/* 2nd */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>79</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#983A1E] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>Medium</button>
        </div>
        {/* 3rd */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>94</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#FEAA10] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>High</button>
        </div>
       </div>
          </td>
          <td className="w-[200px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Feb 22, 2021</td>
          <td className="w-[200px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Feb 22, 2021</td>
          
          <td className="w-[212px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">
            <div className='flex items-center gap-13'>
                <div className='flex items-center gap-2'>
                <img src="./icons/polygon2.png" alt="PolyGon Icon" />
                <h1 className='text-[18px] text-[#FFFFFF] leading-[18px] font-medium'>95</h1>
                </div>
                <div className='flex items-center justify-between gap-1'>
                <h1 className='text-[16px] text-[#27F23C] leading-[18px] font-medium mt-1'>+1</h1>
                
                <img src="./icons/information.png" alt="PolyGon Icon" />
                </div>
            </div>
          </td>
          <td className="w-[357px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665]  text-[18px] leading-[18px] font-medium">
           <div className='flex items-center'>
            <img src="./icons/shield.png" alt="shield icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/home.png" alt="Home icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/cart.png" alt="cart icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/code.png" alt="code icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/design.png" alt="Design icon" />
           </div>
          </td>
          <td className="w-[196px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">
            <button className='bg-[#983A1E] h-[33px] w[90px] rounded-[2.29px] py-[8px] px-[12px] text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold'>Important</button>
          </td>
        </tr>
         {/* 3rd row static data*/}
         <tr>
        <td className="w-[368px] h-[121px] py-[16px] px-[20px] bg-[#1A1D29] border-bl rounded-bl-3xl">
       <h1 className='text-[#FFFFFF] text-[18px] leading-[24px] font-medium'> Application1 A - <span className='text-[#2B9AA1]'>248</span> Valnerabilities</h1>
       <div className='flex justify-between'>
       {/* 1st */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>2</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#FF0000] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>CRITICAL</button>
        </div>
        {/* 2nd */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>79</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#983A1E] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>Medium</button>
        </div>
        {/* 3rd */}
        <div>
        <h1 className='text-[#AEB6CE] text-[18px] leading-[16px] font-medium my-2'>94</h1>
       <button className='text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold bg-[#FEAA10] w-[90px] h-[33px] py-[8px] px-[12px] rounded-[2.29px]'>High</button>
        </div>
       </div>
          </td>
          <td className="w-[200px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Feb 22, 2021</td>
          <td className="w-[200px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">Feb 22, 2021</td>
          
          <td className="w-[212px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665] text-[#FFFFFF] text-[18px] leading-[18px] font-medium border-x border-x-[#464665]">
            <div className='flex items-center gap-13'>
                <div className='flex items-center gap-2'>
                <img src="./icons/polygon3.png" alt="PolyGon Icon" />
                <h1 className='text-[18px] text-[#FFFFFF] leading-[18px] font-medium'>78</h1>
                </div>
                <div className='flex items-center justify-between gap-1'>
                <h1 className='text-[16px] text-[#27F23C] leading-[18px] font-medium mt-1'>+1</h1>
                
                <img src="./icons/information.png" alt="PolyGon Icon" />
                </div>
            </div>
          </td>
          <td className="w-[357px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29] border-b border-b-[#464665]  text-[18px] leading-[18px] font-medium">
           <div className='flex items-center'>
            <img src="./icons/shield.png" alt="shield icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/home.png" alt="Home icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/cart.png" alt="cart icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/code.png" alt="code icon" />
            <hr className='w-[10px] h-[1px] bg-[#464665] mx-1' />
            <img src="./icons/design.png" alt="Design icon" />
           </div>
          </td>
          <td className="w-[196px] h-[121px] py-[16px] px-[12px] bg-[#1A1D29]  text-[18px] leading-[18px] font-medium border-l border-l-[#464665] rounded-br-3xl">
            <button className='bg-[#FEAA10] h-[33px] w[90px] rounded-[2.29px] py-[8px] px-[12px] text-[#FFFFFF] text-[13.71px] leading-[16.76px] font-bold'>Strategic</button>
          </td>
          <div className='w-[1px] h-[100px] bg-[#464665]'></div>
        </tr>

  </tbody>
</table>
<div className='w-[1488px] h-[1px] bg-[#464665] mx-5'></div>
<div className='flex justify-end mt-5'>
  {renderPagination()}
  </div>
</div>
      

        </>
 
    )
}

export default InventoryTable