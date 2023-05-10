import React, { useState } from 'react';
import { GrMail } from 'react-icons/gr';
import { AiOutlineStar } from 'react-icons/ai';
import { MdSchedule } from 'react-icons/md';
import { BsChatLeft } from 'react-icons/bs';
import { BsCameraVideo } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { SlPeople } from 'react-icons/sl';
import { RxHamburgerMenu } from 'react-icons/rx';

const SideNav = () => {
  const menus = [
    { name: 'Mail', link: '/', icon: GrMail },
    { name: 'Stared', link: '/', icon: AiOutlineStar },
    { name: 'Scheduled', link: '/', icon: MdSchedule },
    { name: 'Chat', link: '/', icon: BsChatLeft, margin: true },
    { name: 'Spaces', link: '/', icon: SlPeople },
    { name: 'Meet', link: '/', icon: BsCameraVideo },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-gray-200 text-black min-h-screen ${
        open ? 'w-72' : 'w-16'
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <RxHamburgerMenu
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <a
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && 'mt-5'
            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-300 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: '20' })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && 'opacity-0 translate-x-28 overflow-hidden'
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && 'hidden'
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
