
const Carosel = () => {
    return (
        <div className=' '>
        <div className="   carousel w-full">
         
         <div id="slide1" className="carousel-item   relative w-full">
           <img 
            src="https://i.ibb.co/s26VqrZ/Blue-Minimalist-Travel-Banner.png" className=" w-full h-[80vh]  " />
           
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide4" className="btn btn-circle">❮</a> 
             <a href="#slide2" className="btn btn-circle">❯</a>
           </div>
           
         </div> 
         <div id="slide2" className="carousel-item relative w-full">
           <img src="https://i.ibb.co/dr04W7J/Blue-Minimalist-Travel-Banner-4.png" className="w-full h-[80vh]" />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide1" className="btn btn-circle">❮</a> 
             <a href="#slide3" className="btn btn-circle">❯</a>
           </div>
         </div> 
         <div id="slide3" className="carousel-item relative w-full">
           <img src="https://i.ibb.co/jf1QsRQ/Blue-Minimalist-Travel-Banner-5.png" className="w-full h-[80vh]" />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide2" className="btn btn-circle">❮</a> 
             <a href="#slide4" className="btn btn-circle">❯</a>
           </div>
         </div> 
         <div id="slide4" className="carousel-item relative w-full">
           <img src="https://i.ibb.co/W3sZSsS/Blue-Minimalist-Travel-Banner-3.png" className="w-full h-[80vh]" />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide3" className="btn btn-circle">❮</a> 
             <a href="#slide1" className="btn btn-circle">❯</a>
           </div>
         </div>
    
       </div>
   
      
             
  </div>
    );
};

export default Carosel;