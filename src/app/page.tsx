
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Goldbg from '@/app/components/goldbg'
import Sliders from '@/app/components/carousel'
import Fillform from '@/app/components/form'








export default function Home() {
  return (
    
    <div>
      <Header />
     <div className="relative w-screen h-135">
        <Goldbg />
        <div className="absolute top-20 z-20   h-full w-screen overflow-visible">
         <Sliders/>
        </div>
       
     </div>
     <div className="relative w-screen h-150 bg-[#0e1618]"></div>
     <div className="relative w-screen h-100"></div>

     <div className=''>
     <div className="relative w-screen h-[fit+10] bg-[#0e1618]">
      <div className="flex flex-row relative p-30 text-left text-white">
        <div className="container w-[30%] md:w-90%">
          <h1 className="text-2xl">We will buy your house</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
     </div>
     </div>
     <Fillform/>
     <div className="relative w-screen h-150"></div>



      <Footer />
    </div>
  );
}
