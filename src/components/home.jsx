import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Home = () => {
/*
    const [homeCoins, sethomeCoins] = useState([]);
    const arr = [1, 2, 3, 4];
    useEffect(() => {
        
        const fetchHome = async () => {
           
             const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/list");
          //  const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr");
            console.log(data);
            sethomeCoins(data);
        }

        fetchHome();
    }, []);*/
    return (
      
        <div>
           <h1>Homes</h1>
        </div>
    );
};


export default Home
