import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/coins.css'

const Exchanges = () => {

  const url = "https://api.coingecko.com/api/v3/exchanges?per_page=200"; 
  const [data, setData] = useState([]); 
  
  const fetchInfo = () => {
       
    return axios.get(url).then((res) => setData(res.data));

  };
  
     useEffect(() => {
        fetchInfo();
     }, []);
  
  
  return (
          <div className='exchange-page'>
      
        {
          data.map((dataobj,key) => {
            return (
              <div className='exchange-display'>
                <img src={dataobj.image} alt="" width={70}/>
                <h1>
                  {dataobj.name}
                </h1>
                <h2>{ dataobj.trust_score_rank}</h2>
                { /*  <h4>{dataobj.year_established}</h4> */}
                <p> {dataobj.country}</p>
              </div>
            );
          })}

    </div>
  )
}

export default Exchanges
