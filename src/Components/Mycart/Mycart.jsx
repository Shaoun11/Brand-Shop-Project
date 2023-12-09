import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData,} from 'react-router-dom';
import { Authcontext } from '../Authrovider/Authprovider';
import AddCard from './AddCard';

const Mycart = () => {
  
    const [cart,setcart]=useState([]);
    const cartdata=useLoaderData();
    const [datacart,setdata]=useState(cartdata);
    

    
    
    const {user}=useContext(Authcontext);
    const cartemail=user.email;
  

    useEffect(()=>{
        const cartfilter=datacart?.filter(cart=>cart.email==cartemail)
        setcart(cartfilter)
    },[datacart,cartemail])

   


    return (
        <div>
         {
            cart.map(carts=><AddCard key={carts._id}
                datacart={datacart}
                setdata={setdata}
                 cart={carts}></AddCard>)
         }   
        </div>
    );
};

export default Mycart;