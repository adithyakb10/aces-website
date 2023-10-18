
import React from 'react';
import Image from 'next/image';

const Home = () => {
    return (
        <section className='w-full flex-col'>
            <h1 className='head_text text-center'>
                ACES Association    
                <br/>
                <span></span>
            </h1>
            <div className='flex-center'>
                <p className='desc text-center'>
                    Department Of Computer Science And Engineering <br/>
                    Sahrdaya College Of Engineering & Technology, Kodakara
                </p>
            </div>
            <div>
                <h2 className='mt-5 font-bold text-black text-2xl'> Event Highlights: </h2>
                
            </div>
            <div>
                <h2 className='mt-5 font-bold text-black text-2xl'> Upcoming Events: </h2>
                
            </div>
            <div>
                <h2 className='mt-5 font-bold text-black text-2xl'> Group: </h2>
                
            </div>
        </section>
    )
}

export default Home;