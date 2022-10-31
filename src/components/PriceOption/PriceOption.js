import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {features} = option;
    return (
       <div>
             <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <h3>
                <span className='text-5xl font-bold text-white'> {option.price}</span>
                <span className='text-2xl text-gray-600'>/mon</span>
            </h3>
            <div className="text-3xl my-4">{option.name}</div>
            {
            features.map((feature, idx) => <Feature key={idx} feature ={feature}></Feature>)
        }
        <button className='text-white font-bold w-full bg-pink-300 py-2 rounded mt-5'>Buy Now</button>
        </div>
       </div>
    );
};

export default PriceOption;