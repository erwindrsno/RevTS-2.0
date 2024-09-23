// import '../style/index.css'
import { Link } from 'react-router-dom';

export const Header = () => {
  return(
    <div className="flex justify-between space-x-20 flex-row p-4">
      <h1 className="text-3xl text-bluegray-900 font-bold font-sans">RevTS</h1>
      <nav className="flex space-x-20 text-xl text-bluegray-900 font-sans font-medium items-center">
        <Link to="/" className='text-bluegray-900'>Beranda</Link>
        <Link to="/contact" className='text-bluegray-900'>Hubungi Kami</Link>
        <Link to="/about" className='text-bluegray-900'>Tentang Kami</Link>
      </nav>
    </div>
  )
}