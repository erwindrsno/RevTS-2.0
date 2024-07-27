import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='flex flex-col'>
      <Link to="/">Beranda</Link>
      <Link to="/topik-skripsi">Topik Skripsi</Link>
    </nav>
  )
}