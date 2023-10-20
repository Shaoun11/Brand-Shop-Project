import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Authcontext } from '../Authrovider/Authprovider';
import AddCard from './AddCard';

const Mycart = () => {
    const [cart,setcart]=useState([]);
    const cartdata=useLoaderData();

    
    const {user}=useContext(Authcontext);
    const cartemail=user.email;
  

    useEffect(()=>{
        const cartfilter=cartdata?.filter(cart=>cart.email==cartemail)
        setcart(cartfilter)
    },[cartdata,cartemail])


    return (
        <div>
         {
            cart.map(carts=><AddCard key={carts._id} cart={carts}></AddCard>)
         }   
        </div>
    );
};

export default Mycart;