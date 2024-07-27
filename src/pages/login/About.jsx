// import '../style/index.css'
import Description from '../../text/Description.jsx'
import Header from '../../components/login/Header.jsx'

const About = () =>{
  return (
    <div className='flex flex-col h-screen w-screen relative'>
      <Header />
      <Description />
    </div>
  )
}

export default About