
import React, { useState } from 'react';
import Header from '../../components/Header';
import DefaultLayout from '../../layout/DefaultLayout';
import FindingsTable from '../../components/FindingsTable';
import MembersTable from '../../components/MembersTable';

const Members = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSecondDropdown = () => {
    setIsSecondOpen(!isSecondOpen);
  };

  return (
    <>
      <DefaultLayout>
        {/* Header start */}
        <div className="flex flex-col">
          <div className="w-[1538px] flex items-center justify-between pt-5">
            <div>
              <h1 className="text-[#FFFFFF] text-[40px] font-bold leading-[48px]">Members</h1>
              <p className="text-[#C3C3C3] text-[20px] font-medium leading-[30px] capitalize">
                Here’s your burnout assessment overview
              </p>
            </div>

            <div className="flex items-center">
              <Header />
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <div className="flex items-center bg-transparent border border-[#C3C3C3] w-[252px] h-[45px] p-2 rounded-[3px] mr-3 my-5 ">
              <input
                type="text"
                placeholder="Search"
                className=" w-[341px] h-[44px] rounded-[12px] p-2 focus:outline-none bg-transparent placeholder:text-white text-white"
              />
              <img src="./icons/search.png" alt="Search icon" />
            </div>
            <div className="">
              <button className="bg-[#1EBFC9] rounded-[3px] w-[158px] h-[44px] p-[14px] text-[#FFFFFF] text-[16px] leading-[22px] font-medium">
                Add Application
              </button>
            </div>
          </div>
        </div>

        <div className="w-[1539px] h-[777px] bg-[#13141B] rounded-xl p-5">
          <div className="flex">
            <div className="w-[293px] h-[737px] rounded-xl bg-[#181A25]">
              <h1 className="text-[#A3A3A3] text-[12px] leading-[22px] font-normal px-5 py-3 bg-[#1D232D] rounded-t-xl mb-5">
                Filters
              </h1>
              {/* side */}
              <div className="relative bg-[#1D232D] w-[250px] h-[45px] gap-[12px] mx-auto rounded">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full p-4 rounded-b-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                >
                  <span className="text-[#FFFFFF] text-[16px] leading-[22px] font-normal">Role</span>
                  <svg
                    className={`w-6 h-6 ${
                      isOpen ? 'duration-300 text-[#FFFFFF] w-[24px] h-[24px]' : 'duration-300 text-[#FFFFFF] transform rotate-180 '
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
</button>
            {isOpen && (
              <div className="absolute z-10 w-full mt-1 duration-300">
                <label className="block px-4 py-2 text-white">
                  <input type="checkbox" className="mr-2 text-[#FFFFFF] text-[14px] leading-[22px]" />
                  Group Admin
                </label>
                <label className="block px-4 py-2 text-white">
                  <input type="checkbox" className="mr-2" />
                  Org Admin
                </label>
                <label className="block px-4 py-2 text-white">
                  <input type="checkbox" className="mr-2" />
                  Org Collaborator
                </label>
              </div>
            )}

            
          </div>


          {/* Left second dropdown */}
          <div className={`relative bg-[#1D232D] w-[250px] h-[45px] gap-[12px] mx-auto rounded ${
                      isOpen ? ' mt-35' : 'mt-5'
                    }  `}>
                <button
                  onClick={toggleSecondDropdown}
                  className="flex items-center justify-between w-full p-4 rounded-b-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                >
                  <span className="text-[#FFFFFF] text-[16px] leading-[22px] font-normal">Auth</span>
                  <svg
                    className={`w-6 h-6 ${
                      isSecondOpen ? ' duration-300 text-[#FFFFFF] w-[24px] h-[24px]' : 'duration-300 text-[#FFFFFF] transform rotate-180'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
</button>
            {isSecondOpen && (
              <div className="absolute z-10 w-full mt-1 duration-300">
                <label className="block px-4 py-2 text-white">
                  <input type="checkbox" className="mr-2 text-[#FFFFFF] text-[14px] leading-[22px]" />
                  Bitbucket
                </label>
                <label className="block px-4 py-2 text-white">
                  <input type="checkbox" className="mr-2" />
                  Azure AD
                </label>
                <label className="block px-4 py-2 text-white">
                  <input type="checkbox" className="mr-2" />
                  GitHub
                </label>
                <label className="block px-4 py-2 text-white">
                  <input type="checkbox" className="mr-2" />
                  Google
                </label>
              </div>
            )}

            
          </div>
        </div>
        <div className="w-[1182px] h-[364px]">
          {/* Table */}
          <MembersTable />
        </div>
      </div>
    </div>
  </DefaultLayout>
</>
);
};

export default Members;