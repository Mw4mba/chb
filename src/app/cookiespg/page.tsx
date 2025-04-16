
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Banner from '@/app/components/banner'
import Lorem from '@/app/components/lorem'








export default function Home() {
  return (
    <main>

     <div>
      <Header />
      {Banner("Cookies and Private")}
      <br></br>
      <div className="static h-fit w-screen  p-[5%] text-black">
        <div className="relative r-[10%] w-[80%] left-[10] top-10 text-left flex-col rounded-4xl bg-white p-[50]">
          <Lorem/>
          <Lorem/>
        </div>
        
      </div>
      
        
      <br></br>

      
    </div>
    <div>
        <Footer />
      </div>
    </main>

  );
}
