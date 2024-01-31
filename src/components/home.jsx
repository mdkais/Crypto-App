import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Home = () => {
   
  //const url = "https://api.coingecko.com/api/v3/coins/list"; 
   // const [data, setData] = useState([]); 
    
    const fetchInfo = async() => {
       const {data} = await axios.get("https://api.coingecko.com/api/v3/exchanges");
    //return axios.get(url).then((res) => setData(res.data));
        console.log(data);
  };
  
     useEffect(() => {
        fetchInfo();
     }, []);
    
    return (
       <div className='home-page'>
      <h1>coins</h1>
            {/*<center>     
        {
          data.map((dataobj, index) => {
            return (
              <div>
                <img src={dataobj.image} alt="" />
                <h1>
                  {dataobj.name}
                </h1>
                <h4>{}</h4>
                <p> {dataobj.symbol}</p>
              </div>
            );
          })}
        </center>*/}
    </div>
    );
};


export default Home
