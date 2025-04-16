


export default function myfooter(){
    return(
       
       
             <footer className="  absolute  w-screen h-80 flex-row bg-white text-[#0e1618]  " >
          
                <div className="relative justify-center top-10">
                     <a href=""><h1 className=" top font-extrabold text-3xl top hover:text-[#296039] text-center z-40" >+27XX XXX XXXX</h1></a>

                </div>


                <div className=" bg-white w-screen h-20 absolute bottom-10 flex-row text-center ">
                    <h1>
                        Head office: 13 Nicol Rd, Bedfordview, Johannesburg, 2008
                    </h1>
                    <Link href="/cookiespg"><i className="hover:text-[#296039]"> Cookies and Privacy policy</i> </Link>
                    
                    <i> | </i>
                    <Link href="/termsandconditions"><i className="hover:text-[#296039]"> Terms and conditions</i></Link>
                    
                </div>

             

            </footer>



    )
};
