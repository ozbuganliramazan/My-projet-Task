import { VscDebugRestart } from 'react-icons/vsc';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdDiscount } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import React, { useState } from 'react';

const Inbox = () => {
  const [showCategory, setShowCategory] = useState('Primary');
  const categories = [
    {
      icon: HiOutlineMailOpen,
      title: 'Primary',
    },
    {
      icon: MdDiscount,
      title: 'Promotions',
    },
    {
      icon: BsPeople,
      title: 'Socials',
    },
  ];

  return (
    <div className="bg-white rounded m-4 p-4 w-full h-full">
      <div className="flex w-100 justify-between items-center">
        <div className="flex gap-3">
          <input type="checkbox" />
          <button className="p-2 hover:bg-gray-200 rounded-md">
            <VscDebugRestart />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-md">
            <BsThreeDotsVertical />
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <span> 1 of 22</span>
          <button className="p-2 hover:bg-gray-200 rounded-md">
            <MdKeyboardArrowLeft />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-md">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div className="flex gap-6 my-6">
        {categories.map((item, i) => {
          const selectedCategory = showCategory === item.title ? true : false;
          console.log(selectedCategory);
          return (
            <button
              key={i}
              className={`flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-60 border-b-4  ${
                selectedCategory && 'border-b-4 border-indigo-500 '
              } `}
              onClick={() => setShowCategory(item.title)}
            >
              {React.createElement(item?.icon, { size: '20' })}
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>
      {showCategory === 'Primary' && <div>foo</div>}
      {showCategory === 'Promotions' && <div>bar</div>}
      {showCategory === 'Socials' && <div>buz</div>}
    </div>
  );
};

export default Inbox;
