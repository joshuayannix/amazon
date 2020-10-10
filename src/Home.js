import React from 'react';
import background from './amazon-background.jpg';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img 
        className='home__image'
        src={background} 
        alt="amazon background image"
      />
      <div className="home__row">
        <Product 
         id="12321341"
         title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
         price={11.96}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product 
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="home__row">
        <Product 
          id='123123'
          title='Super Smash Bros. Ultimate - Nintendo Switch'
          price={59.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SL1500_.jpg'
        />
        <Product 
          id='123123'
          title='Super Smash Bros. Ultimate - Nintendo Switch'
          price={59.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SL1500_.jpg'
        />
        <Product 
          id='123123'
          title='Super Smash Bros. Ultimate - Nintendo Switch'
          price={59.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SL1500_.jpg'
        />
      </div>
      
    </div>
  )
}

export default Home
