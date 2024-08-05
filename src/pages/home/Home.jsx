import Header from '../../components/home/Header.jsx'
import {NavBar} from '../../components/home/NavBar.jsx'

export const Home = () => {
  return (
    <div className='flex flex-col h-screen w-screen relative bg-bluegray-50'>
      <Header />
      <NavBar />
    </div>
  )
}