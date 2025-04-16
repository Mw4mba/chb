export default function textbox(text:string){
    
    return(
        <main>
        <div>   
        <div className="relative">
            <input 
            name="query"
            className='border-[0.5] border-[#0e1618]  w-full h-10'
            placeholder={`${text}`}
            id={`${text}`}/>
           
        </div><br></br>
        </div>
        
        </main>
        
    );
}