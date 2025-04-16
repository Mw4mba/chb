
import Link from 'next/link';



export default function myheader(){
    return(
        //<div className="flex" >
       
             <div className="  fixed top-0 w-screen h-36 flex-row bg-white text-[#0e1618] z-60" >
          
                <div className="absolute right-10 top-10">
                     <a href=""><h1 className=" top font-extrabold text-3xl top hover:text-[#296039]" >+27XX XXX XXXX</h1></a>

                </div>

             <div className="container ">

                 <Link href="/">
                    <img src="logo.png"
                  width={200}
                   height={200}
                  alt="home"
                 className="relative left-0.10 top-[-10]" />     
              </Link>
             </div>

             

            </div>



    )
};
