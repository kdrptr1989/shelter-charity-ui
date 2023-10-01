import AboutUs from './components/aboutus/aboutus'
import Introduction from './components/introduction/introduction'
import Navbar from './components/navbar'

export default function Home() {
  return (
   <div className="flex justify-center max-w-7xl flex-col mx-auto"  >
    <Navbar />
   <div className="pt-30"><Introduction /></div>
   <AboutUs />
   </div>
  )
}
