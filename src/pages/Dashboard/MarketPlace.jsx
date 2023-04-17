import React, { useState } from 'react';
import Header from '../../components/Header';
import DefaultLayout from '../../layout/DefaultLayout';
import image1 from '../../images/discover/image1.png'
import image2 from '../../images/discover/image2.png'
import image3 from '../../images/discover/image3.png'
import image4 from '../../images/discover/image4.png'
import image5 from '../../images/discover/image5.png'
import image6 from '../../images/discover/image6.png'
import image7 from '../../images/discover/image7.png'


const MarketPlace = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(true);
    const [rating, setRating] = useState(4);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleSecondDropdown = () => {
        setIsSecondOpen(!isSecondOpen);
    };
    const toggleThirdDropdown = () => {
        setIsThirdOpen(!isThirdOpen);
    };
    // Starts Rating Code
    const handleRating = (value) => {
        setRating(value);
    };

    return (
        <>
            <DefaultLayout>
                {/* Header start */}
                <div className="flex flex-col">
                    <div className="w-[1538px] flex items-center justify-between pt-5">
                        <div>
                            <h1 className="text-[#FFFFFF] text-[40px] font-bold leading-[48px]">Marketplace</h1>
                            <p className="text-[#C3C3C3] text-[20px] font-medium leading-[30px] capitalize">
                                Here’s your burnout assessment overview
                            </p>
                        </div>

                        <div className="flex items-center">
                            <Header />
                        </div>
                    </div>
                    {/* main */}
                    <div className="w-[1539px] h-[864px] bg-[#13141B] rounded-xl p-5">
                        <div className='flex'>
                            {/* left part */}


                            <div className="w-[293px] h-[824px] rounded-xl bg-[#181A25] scroll-py-72 scrollbar-thin scrollbar-thumb-[#13141B] scrollbar-track-[#1D232D] overflow-x-hidden overflow-y-scroll hover:scrollbar-thumb-black-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scroll-my-6">
                                <h1 className="text-[#A3A3A3] text-[12px] leading-[22px] font-normal px-5 py-3 bg-[#1D232D] rounded-t-xl mb-5">
                                    Show apps for
                                </h1>
                                {/* side */}
                                <div className="relative bg-[#1D232D] w-[250px] h-[45px] gap-[12px] mx-auto rounded">
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center justify-between w-full p-4 rounded-b-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    >
                                        <span className="text-[#FFFFFF] text-[16px] leading-[22px] font-normal">All Products</span>
                                        <svg
                                            className={`w-6 h-6 ${isOpen ? 'transform rotate-180 duration-300 text-[#FFFFFF] w-[24px] h-[24px]' : 'duration-300 text-[#FFFFFF] '
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
                                <div className={`relative bg-[#1D232D] w-[250px] h-[45px] gap-[12px] mx-auto rounded ${isOpen ? ' mt-35' : 'mt-5'
                                    }  `}>
                                    <button
                                        onClick={toggleSecondDropdown}
                                        className="flex items-center justify-between w-full p-4 rounded-b-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    >
                                        <span className="text-[#FFFFFF] text-[16px] leading-[22px] font-normal">Select a hosting type</span>
                                        <svg
                                            className={`w-6 h-6 ${isSecondOpen ? 'transform rotate-180 duration-300 text-[#FFFFFF] w-[24px] h-[24px]' : 'duration-300 text-[#FFFFFF] '
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
                                {/* left third drop down */}
                                <div className={`relative bg-[#1D232D] w-[250px] h-[45px] gap-[12px] mx-auto rounded ${isSecondOpen ? ' mt-45' : 'mt-5'
                                    }  `}>
                                    <button
                                        onClick={toggleThirdDropdown}
                                        className="flex items-center justify-between w-full p-4 rounded-b-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    >
                                        <span className="text-[#FFFFFF] text-[16px] leading-[22px] font-normal">Sort By</span>
                                        <svg
                                            className={`w-6 h-6 ${isThirdOpen ? ' duration-300 text-[#FFFFFF] w-[24px] h-[24px]' : 'duration-300 text-[#FFFFFF] transform rotate-180'
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isThirdOpen && (
                                        <div className="absolute z-10 w-full mt-1 duration-300">
                                            <h1 className='text-[#FFFFFF] text-[16px] leading-[22px] font-normal mt-5 mb-2 ml-4'>Filter By</h1>
                                            <label className="block px-4 py-2 text-[#E3E3E3]">
                                                <input type="checkbox" className="mr-2 text-[#E3E3E3] text-[12px] leading-[22px] font-normal" />
                                                Cloud Fortified apps
                                            </label>
                                            <label className="block px-4 py-2 text-[#E3E3E3]">
                                                <input type="checkbox" className="mr-2 text-[#E3E3E3] text-[12px] leading-[22px] font-normal" />
                                                Partner Supported
                                            </label>
                                            <label className="block px-4 py-2 text-[#E3E3E3]">
                                                <input type="checkbox" className="mr-2 text-[#E3E3E3] text-[12px] leading-[22px] font-normal" />
                                                Free for all teams
                                            </label>
                                            <label className="block px-4 py-2 text-[#E3E3E3]">
                                                <input type="checkbox" className="mr-2 text-[#E3E3E3] text-[12px] leading-[22px] font-normal" />
                                                Beta Version
                                            </label>
                                            <label className="block px-4 py-2 text-[#E3E3E3]">
                                                <input type="checkbox" className="mr-2 text-[#E3E3E3] text-[12px] leading-[22px] font-normal" />
                                                Free up to 10 users
                                            </label>
                                            <h1 className='text-[#FFFFFF] text-[16px] leading-[22px] font-normal mt-5 mb-5 ml-4'>Categories</h1>
                                            <div className='text-[12px] text-[#E3E3E3] leading-[22px] font-normal ml-4'>
                                                <h1>Integrations </h1>
                                                <h1>Utilities</h1>
                                                <h1>Project management </h1>
                                                <h1>Macros</h1>
                                                <h1>Admin tools</h1>
                                                <h1>Blueprints </h1>
                                                <h1>Blue management</h1>
                                                <h1>CRM </h1>
                                                <h1>Charts & diagramming </h1>
                                                <h1>Code Quality </h1>
                                                <h1>Integrations </h1>
                                                <h1>Integrations </h1>
                                                <h1>Integrations </h1>
                                                <h1>Integrations </h1>
                                                <h1>Integrations </h1>
                                                <h1>Integrations </h1>
                                            </div>

                                        </div>
                                    )}


                                </div>
                            </div>




                            {/* right side part */}
                            <div className='p-5 w-full'>
                                <h1 className='text-[32px] text-[#FFFFFF] leading-[38.4px] font-bold'>Discover new apps</h1>
                                <p className='text-[#C3C3C3] text-[20px] leading-[30px] font-medium my-2'>Browse through our category pages to learn about new useful apps you may have never heard of before.</p>
                                <div className='w-[87%]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <img src={image2} alt="image1" />
                                            <p className='text-[#FFFFFF] text-[16px] leading-[20.83px] font-medium mt-1'>Monitoring</p>
                                        </div>
                                        <div>
                                            <img src={image1} alt="image2" />
                                            <p className='text-[#FFFFFF] text-[16px] leading-[20.83px] font-medium mt-1'>Charts and diagrams</p>
                                        </div>
                                        <div>
                                            <img src={image3} alt="image3" />
                                            <p className='text-[#FFFFFF] text-[16px] leading-[20.83px] font-medium mt-1'>Customer Support</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 2nd part */}
                                <div>
                                    <h1 className='text-[28px] text-[#FFFFFF] leading-[33.6px] font-bold mt-10'>Staff picks</h1>
                                    <p className='text-[#C3C3C3] text-[20px] leading-[30px] font-medium my-2'>Each quarter Atlassian's Ecosystem team selects top apps to highlight. We think these apps are a great place to start if  you're new to the Atlassian Marketplace.</p>
                                    <div className='flex relative justify-between w-[76%]'>
                                        <div className="absolute -top-[0px] left-45 w-[114px] h-[114px] bg-[url(/image5bg.png)] bg-no-repeat bg-contain"></div>
                                        <div className='w-[297px] h-[258px] bg-[#181A25] rounded-xl'>
                                            <div className='flex  '>
                                                <img src={image4} alt="image4" className='w-[34px] h-[50px] ml-5 mt-5' />
                                                <div className='ml-10 flex flex-col items-center relative'>
                                                    <img src={image5} alt="image4" className='w-[73px] h-[55px] ' />
                                                    <p className='text-[12px] text-[#FFFFFF] leading-[22px] font-bold absolute bottom-8'>STAFF PICK</p>
                                                </div>
                                            </div>
                                            <div className='mx-5'>
                                            <h1 className='text-[#FFFFFF] text-[14px] leading-[16px] font-bold py-5 pb-3'>BigPicyure-Peoject Management </h1>
                                            <p className='text-[#FFFFFF] text-[12px] leading-[16px] pb-1'>Take your Project/Product Portfolio Management to the next level. Agile (incl.SAFe,LeSS), Classic, & Hybrid methods</p>
                                            <a href="" className='text-[12px] leading-[16px] text-[#FFFFFF] font-normal'>by <span className='text-[#70D0D8] font-bold'>Appfire</span></a>
                                            <div className='flex justify-between mb-8'>
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className={`h-6 w-6 fill-current ${star <= rating ? 'text-[#FEBC43]' : 'text-[#808080]'
                                                                } cursor-pointer`}
                                                            viewBox="0 0 20 20"
                                                            onClick={() => handleRating(star)}
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 14.655l-4.417 2.704a.766.766 0 0 1-1.174-.793l.84-4.918L.369 8.987a.765.765 0 0 1 .424-1.305l5.012-.73L9.029 2.69a.766.766 0 0 1 1.382 0l2.204 4.252 5.012.73a.765.765 0 0 1 .424 1.305l-3.605 3.524.84 4.918a.766.766 0 0 1-1.174.793L10 14.655z"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <div>
                                                    <p className='text-[#16E32B] text-[12px] leading-[22px] font-normal'>15.4k installs</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className='bg-[#13141B] border-b border-b-[#C0C3C3] rounded-b-xl w-[297px] h-[39px] border-opacity-10'>
                                                 <h1 className='text-[#69D8E1] text-[12px] leading-[22px] font-medium text-center'>CLOUD FORTIFIED</h1>                       
                                        </div>    

                                        </div>
                                        
                                        {/* 2nd */}
                                        <div className='relative'>
                                            <div className="absolute -top-[0px] left-45 w-[114px] h-[114px] bg-[url(/image5bg.png)] bg-no-repeat bg-contain"></div>
                                        <div className='w-[297px] h-[258px] bg-[#181A25] rounded-xl'>
                                            <div className='flex  '>
                                                <img src={image6} alt="image4" className='w-[34px] h-[50px] ml-5 mt-5' />
                                                <div className='ml-10 flex flex-col items-center relative'>
                                                    <img src={image5} alt="image4" className='w-[73px] h-[55px] ' />
                                                    <p className='text-[12px] text-[#FFFFFF] leading-[22px] font-bold absolute bottom-8'>STAFF PICK</p>
                                                </div>
                                            </div>
                                            <div className='mx-5'>
                                                <h1 className='text-[#FFFFFF] text-[14px] leading-[16px] font-bold py-5 pb-3'>Calendar for Jira </h1>
                                            <p className='text-[#FFFFFF] text-[12px] leading-[16px] pb-1'>Google Calendar 2-way sync. Export to ICS (Outlook, Apple Calendar), Display Jira issues & other events on the calendar</p>
                                            <a href="" className='text-[12px] leading-[16px] text-[#FFFFFF] font-normal'>by <span className='text-[#70D0D8] font-bold'>Doitb</span></a>
                                            <div className='flex justify-between mb-8'>
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className={`h-6 w-6 fill-current ${star <= rating ? 'text-[#FEBC43]' : 'text-[#808080]'
                                                                } cursor-pointer`}
                                                            viewBox="0 0 20 20"
                                                            onClick={() => handleRating(star)}
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 14.655l-4.417 2.704a.766.766 0 0 1-1.174-.793l.84-4.918L.369 8.987a.765.765 0 0 1 .424-1.305l5.012-.73L9.029 2.69a.766.766 0 0 1 1.382 0l2.204 4.252 5.012.73a.765.765 0 0 1 .424 1.305l-3.605 3.524.84 4.918a.766.766 0 0 1-1.174.793L10 14.655z"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <div>
                                                    <p className='text-[#16E32B] text-[12px] leading-[22px] font-normal'>3.6k installs</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className='bg-[#13141B] border-b border-b-[#C0C3C3] rounded-b-xl w-[297px] h-[39px] border-opacity-10'>
                                                 <h1 className='text-[#69D8E1] text-[12px] leading-[22px] font-medium text-center'>CLOUD FORTIFIED</h1>                       
                                        </div>                   
                                        </div>
                                        </div>
                                        {/* end 2nd */}
                                        {/* start 3rd */}
                                        <div className='relative'>
                                            <div className="absolute bottom-[140px] rounded-xl left-[203px] w-[114px] h-[114px] bg-[url(/clock.png)] bg-no-repeat bg-contain"></div>
                                        <div className='w-[297px] h-[258px] bg-[#181A25] rounded-xl'>
                                            <div className='flex  '>
                                                <img src={image7} alt="image4" className='w-[34px] h-[50px] ml-5 mt-5' />
                                                <div className='ml-10 flex flex-col items-center relative'>
                                                    <img src={image5} alt="image4" className='w-[73px] h-[55px] ' />
                                                    <p className='text-[12px] text-[#FFFFFF] leading-[22px] font-bold absolute bottom-5'>STAFF PICK</p>
                                                </div>
                                            </div>
                                            <div className='mx-5'>
                                            <h1 className='text-[#FFFFFF] text-[14px] leading-[16px] font-bold py-5 pb-3'>Worklogs - Time Tracking & Reports  </h1>
                                            <p className='text-[#FFFFFF] text-[12px] leading-[16px] pb-1'>Time reports & time tracking for members of your team done in any easy & flexible way.</p>
                                            <a href="" className='text-[12px] leading-[16px] text-[#FFFFFF] font-normal'>by <span className='text-[#70D0D8] font-bold'>DSolDevelo</span></a>
                                            <div className='flex justify-between mb-1'>
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className={`h-6 w-6 fill-current ${star <= rating ? 'text-[#FEBC43]' : 'text-[#808080]'
                                                                } cursor-pointer`}
                                                            viewBox="0 0 20 20"
                                                            onClick={() => handleRating(star)}
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 14.655l-4.417 2.704a.766.766 0 0 1-1.174-.793l.84-4.918L.369 8.987a.765.765 0 0 1 .424-1.305l5.012-.73L9.029 2.69a.766.766 0 0 1 1.382 0l2.204 4.252 5.012.73a.765.765 0 0 1 .424 1.305l-3.605 3.524.84 4.918a.766.766 0 0 1-1.174.793L10 14.655z"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <div>
                                                    <p className='text-[#16E32B] text-[12px] leading-[22px] font-normal'>3.4k installs</p>
                                                </div>
                                            </div>

                                            </div>
                                            <div className='bg-[#13141B] border-b border-b-[#C0C3C3] rounded-b-xl w-[297px] h-[39px] border-opacity-10'>
                                                 <h1 className='text-[#69D8E1] text-[12px] leading-[22px] font-medium text-center'>CLOUD FORTIFIED</h1>                       
                                        </div>  
                                        </div>
                                        </div>
                                        {/* end 3rd */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </DefaultLayout>
        </>
    );
};

export default MarketPlace;