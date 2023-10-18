import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Brand = () => {
    const brand=useLoaderData();
  
    console.log(brand);
    return (
        <div>
            
        </div>
    );
};

export default Brand;