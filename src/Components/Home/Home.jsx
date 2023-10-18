
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Homecard from './HomeCard/Homecard';
import Footer from '../Footer/Footer';
import FeturedSection from './FeturedSection';
import CustomerSay from './CustomerSay';
import Contact from '../Contact/Contact';

const Home = () => {
    const brands=useLoaderData();
 
    return (
        <div className='bg-stone-100'>
           <Banner></Banner>
           <div className='mt-32'>
                <h1 className='text-7xl text-center font-semibold '>Our <span className='text-red-500'>Brand</span></h1>
            </div>
            <div className='grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-20 max-w-7xl mx-auto'>
                {
                    brands.map(brand=><Homecard key={brand.id} brand={brand} ></Homecard> )
                }
            </div>
            <FeturedSection></FeturedSection>
            <CustomerSay></CustomerSay>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;