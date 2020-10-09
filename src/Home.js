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
