import { Link } from 'react-router-dom';
import HomeIcon from "../../assets/icons/house.svg?react";
import BookIcon from "../../assets/icons/book2.svg?react";

export const NavBar = () => {
  return (
    <div className='bg-bluegray-900 h-full w-52'>
      <nav className='flex flex-col p-3 space-y-4'>
        <div className='flex flex-row space-x-2'>
          <HomeIcon className="size-7" />
          <Link to="/home" className='text-bluegray-50 text-lg font-light'>Beranda</Link>
        </div>
        <div className='flex flex-row space-x-2'>
          <BookIcon className="size-7" />
          <Link to="/topics" className='text-bluegray-50 text-lg font-light'>Topik Skripsi</Link>
        </div>
      </nav>
    </div>
  )
}