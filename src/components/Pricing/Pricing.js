import React from 'react';
import PricingOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions= [
        {id: 1, name: 'Free', price: 0, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will Never Feature',
            'Ajaira Feature'
        ]},
        {id: 2, name: 'Medium', price: 9.99, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will Never Feature',
            'Ajaira Feature'
        ]},
        {id: 3, name: 'Premium', price: 19.99, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will Never Feature',
            'Ajaira Feature'
        ]},
    ]
    return (
        <div>
           <div className="grid md:grid-cols-3 gap-3">
           {
                pricingOptions.map(option => <PricingOption
                    key={option.id}
                    option ={option}
                ></PricingOption>)
            }
           </div>
        </div>
    );
};

export default Pricing;