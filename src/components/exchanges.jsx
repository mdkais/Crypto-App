import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/coins.css'
import Button from 'react-bootstrap/Button';

const Exchanges = () => {

 
  const [data, setData] = useState([]); 
  const [page, setPage] = useState(1); 
  const url = `https://api.coingecko.com/api/v3/exchanges?page=${page}&per_page=25`; 
  
  const fetchInfo = () => {
       
    return axios.get(url).then((res) => setData(res.data));

  };
  
  const changePage = (page) => {
    setPage(page);

  }



  const btns = new Array(30).fill(1)


  useEffect(() => {
    fetchInfo();
     }, [page]);
  
  
  return (
          <div className='exchange-page'>
      
        {
          data.map((dataobj,key) => {
            return (
              
              <Link to = {dataobj.url} className='exchange-display' target='blank'>
              
                <img src={dataobj.image} alt="" width={70}/>
                <h1 className='h1-pg'>
                  {dataobj.name}
                </h1>
                <h2>{ dataobj.trust_score_rank}</h2>
                { /*  <h4>{dataobj.year_established}</h4> */}
                <p> {dataobj.country}</p>
            
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

export default Exchanges
