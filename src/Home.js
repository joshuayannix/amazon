import React from 'react';
import './Home.css';
import Coin from './Coin';
import { coinsRedux, searchTermRedux} from './features/appSlice';
import { useSelector } from 'react-redux';

function Home() {
  const coins = useSelector(coinsRedux);
  const searchTerm = useSelector(searchTermRedux);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm?.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  
  console.log(filteredCoins)

  return (
    <div className='home'>      
      {filteredCoins.map(coin => {
        return (
          <Coin 
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        )
      })}                
    </div>
  )
}

export default Home
