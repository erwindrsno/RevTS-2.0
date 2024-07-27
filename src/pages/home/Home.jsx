import Header from '../../components/home/Header.jsx'
import {NavBar} from '../../components/home/NavBar.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col h-screen w-screen relative bg-bluegray-50'>
      <Header />
      <NavBar />
      {/* <nav className='flex space-x-20 text-xl font-inter font-medium items-center'>
        <Link to="/">Beranda</Link>
        <Link to="/topik-skripsi">Topik Skripsi</Link>
      </nav> */}
      {/* <p className='text-9xl text-gray-950'>hai</p> */}
    </div>
  )
}

export default Home