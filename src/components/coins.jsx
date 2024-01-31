import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/coins.css'

const Coins = () => {
    
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"; 
    const [data,setData] = useState([]); 
     
  const fetchInfo = () => {
       
    return axios.get(url).then((res) => setData(res.data));

  };
  
     useEffect(() => {
        fetchInfo();
     }, []);
    
  return (
    <div className='coin-page'>
      
        {
          data.map((dataobj,key) => {
            return (
              <div className='coin-display'>
                <img src={dataobj.image} alt="" />
                <h1>
                  {dataobj.name}
                </h1>
                <h4>INR : {dataobj.current_price} /-</h4>
                <p> {dataobj.symbol}</p>
              </div>
            );
          })}

    </div>
  )
}

export default Coins
