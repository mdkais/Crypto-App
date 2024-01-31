import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Coins = () => {

    const [coin,setCoin] = useState([]); 
        
     useEffect(() => {
        
        const fetchHome = async() => {
           
          //   const {data} = axios.get("https://api.coingecko.com/api/v3/coins/list");
           const { data } =await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr");
            console.log(data);
         //   setCoin(data);
        }

        fetchHome();
     }, []);
    
  return (
    <div>
        <h1>coins</h1> 
    </div>
  )
}

export default Coins
