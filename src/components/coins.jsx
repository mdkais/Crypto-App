import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import '../styles/coins.css'
import { Link } from 'react-router-dom';


const Coins = () => {
    
    const [data, setData] = useState([]); 
    const [page, setPage] = useState(1); 
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&page=${page}`; 



  const fetchInfo = () => {   
    return axios.get(url).then((res) => setData(res.data));
  };

  const changePage = (page) => {
    setPage(page);
  }


  const btns = new Array(132).fill(1);
  
    useEffect(() => {
      fetchInfo();
    }, [page]);
    
  return (
    <div className='coin-page'>
        {
          data.map((dataobj,key) => {
            return (
            
              <Link to={`/coins/${dataobj.id}`} className='coin-display'>
               <div className='coins'>
                <div>
                  <img className='coinimage' src={dataobj.image} alt="" />
               </div>
                <div className='coinData'>
                <h1>
                  {dataobj.name}
                </h1>
                <h4>INR : {dataobj.current_price} /-</h4>
                <p> {dataobj.symbol}</p>
                </div>
              </div>
               
                </Link>
              
            );
          })}
      <div className="btn-container">
      <div className="btn">
          {
          btns.map((item, index) => (
            
            <Button key={index} className='pagebtn' 
              onClick={() => changePage(index+1)}
            >
              {index+1}
              </Button>
            
          ))
        }
      </div>
      </div>
      </div>
  )
}

export default Coins
