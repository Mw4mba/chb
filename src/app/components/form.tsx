import Form from 'next/form'
import Searchbox from '@/app/components/inputfield'

export default function form(){
    return(
         
        <div className="absolute top-350  right-30   w-[40%] h-200 
        
        rounded-3xl bg-white text-[#0e1618] p-10">
            
        <Form action="/search" >
          {/* On submission, the input value will be appended to
            the URL, e.g. /search?query=abc */}
           
          {/*<input name="query" className='border-2 border-[#0e1618]'/>*/}
          <br className='h-10'></br>
          <div className='flex flex-col'>
            <div>{Searchbox(" House-type")}</div>
            <div>{Searchbox(" address")}</div>
            <div>{Searchbox(" email")}</div>
            <div>{Searchbox(" city")}</div>
            <div>{Searchbox(" province")}</div>
            <div>{Searchbox(" Full Name")}</div>
            <div>{Searchbox(" phone number")}</div>

            <div className='flex lg:flex-row sm:flex-col'>{Searchbox("  phone")}  
            {Searchbox("  email")}</div>
          </div>
            

            
          <button type="submit" 
          className='border-2 border-[#0e1618] text-white font-bold bg-[#0e1618] hover:bg-white hover:text-[#0e1618]
                    absolute bottom-10 w-30 h-10'
>Submit</button>
        </Form>
        </div>

    );
}