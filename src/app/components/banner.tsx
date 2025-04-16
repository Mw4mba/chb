

export default function banner(title:string){
    return(
          <div>
           
            <i> cookies page</i>
            <div className="relative top-30 h-60 z-10 w-screen bg-linear-to-bl from-[#ffffbf] from-5% via-[#efbf04] via-30% to-[#7a661d] ">
              <div className="absolute right-5 bottom-5 text-white text-5xl text- justify font-semibold  ">
              <p >
                {title}
                 
              </p>
              </div>
            </div>
           
          </div>
    );
}