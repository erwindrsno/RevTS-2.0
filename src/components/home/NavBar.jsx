import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='flex flex-col'>
      <Link to="/home">Beranda</Link>
      <Link to="/topics">Topik Skripsi</Link>
    </nav>
  )
}