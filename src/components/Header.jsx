// import '../style/index.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="flex justify-between space-x-20 flex-row p-4">
      <h1 className="text-3xl font-bold font-sans">RevTS</h1>
      <nav className="flex space-x-20 text-xl font-inter font-medium items-center">
        <Link to="/">Beranda</Link>
        <Link to="/contact">Hubungi Kami</Link>
        <Link to="/about">Tentang Kami</Link>
      </nav>
    </div>
  )
}

export default Header;