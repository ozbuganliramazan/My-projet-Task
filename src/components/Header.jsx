import mail from '../assets/gmail.png';
import profilep from '../assets/pp.png';
import { BsSearch } from 'react-icons/bs';
import { VscSettings } from 'react-icons/vsc';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { TbGridDots } from 'react-icons/tb';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Header = ({ setShowRightPanel, showRightPanel }) => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleRightPanel = () => {
    setShowRightPanel(!showRightPanel);
  };

  const toggleFilterDropdown = (e) => {
    e.preventDefault();
    setShowFilter(!showFilter);
  };

  const showNotification = () => {
    toast.warn('Profile Details Opened!', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div className="flex bg-gray-100 justify-between items-center min-w-full p-2">
      <img src={mail} className="max-w-[50px] max-h-[30px] cursor-pointer" />
      <form className="relative flex bg-white shadow items-center justify-center p-2 rounded gap-1 mx-5 max-w-[100px]  sm:max-w-[300px] md:min-w-[400px]">
        <BsSearch />
        <input type="text" className="outline-none p-1 w-full" />
        <button
          className="p-2 hover:bg-gray-200 rounded-md"
          onClick={toggleFilterDropdown}
        >
          <VscSettings />
        </button>
        {showFilter && (
          <div className=" flex flex-col gap-4 absolute bottom-[-190px] bg-white rounded w-full p-3 shadow">
            <div className="grid grid-cols-4 items-center">
              <label>From:</label>
              <input
                type="text"
                className="col-span-3 columns-5  border-b-2 border-blue-500 outline-none p-2"
              />
            </div>
            <div className="grid grid-cols-4 items-center">
              <label>To:</label>
              <input
                type="text"
                className="col-span-3 border-b-2 border-blue-500 outline-none p-2"
              />
            </div>
            <button className="bg-blue-500 self-end p-2 rounded text-white">
              Save
            </button>
          </div>
        )}
      </form>
      <div className="flex gap-4 items-center">
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <AiOutlineQuestionCircle />
        </button>
        <button
          className="p-2 hover:bg-gray-200 rounded-md"
          onClick={toggleRightPanel}
        >
          <FiSettings />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <TbGridDots />
        </button>
        <div
          className="bg-white flex px-2 py-1 items-center rounded gap-2 shadow cursor-pointer hover:bg-gray-100"
          onClick={showNotification}
        >
          <span>Google</span>
          <img className="w-[30px]" src={profilep} />
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
<div className="flex bg-gray-300 justify-between min-w-full p-2">
      <img src={mail} className="max-w-[50px]" />
      <form className="flex bg-white shadow items-center justify-center p-2 rounded">
        <BsSearch />
        <input type="text" />
        <VscSettings />
      </form>
      <div>
        
      </div>
    </div>
*/
