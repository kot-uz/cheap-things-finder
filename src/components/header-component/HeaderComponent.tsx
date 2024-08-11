import Link from 'next/link';
import React from 'react';

const HeaderComponent = () => {
  return (
    <nav className="h-[60px] bg-slate-400 flex justify-between items-center">
      <ul className="flex items-center gap-5 ml-5">
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/my-choice">My choice</Link>
        </li>
      </ul>
      <img
        src="/images/react_rotated_logo.jpg"
        alt="user logo"
        className="w-[32px] h-[32px] rounded-full mr-5"
      />
    </nav>
  );
};

export default HeaderComponent;
