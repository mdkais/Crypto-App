import React, { useEffect, useState } from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useParams , Link } from 'react-router-dom'
import '../styles/coindetail.css'
import { Button } from 'react-bootstrap';
import ProgressBar from './progressBar';
import PieChart from './piechart';
import LineChart from './linechats';
import BarChart from './barchart';
import axios from 'axios';

Chart.register(CategoryScale)

const Coindetails = () => {
  
  const dbJson = "http://localhost:3000";
  const [coin, setCoin] = useState({});

  const params = useParams('');

  const getCoinsList = () => {
    fetch(`${dbJson}/coins/${params.id}`)
      .then(response => response.json())
      .then(data => setCoin(data))
      .catch(error => console.log(error))
  }

  
  const getsuggestList = () => {
    fetch(`${dbJson}/own/${params.id}`)
      .then(response => response.json())
      .then(data => setCoin(data))
      .catch(error => console.log(error))
  }


  
  
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain:300 ,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 1000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 2000,
    userLost: 234
  }
  ];


  
     const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#green",
          "#f3ba2f",
          "red",
          "blue"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]

  });



const testData = [
  { bgcolor: "#6a1b9a", completed: coin.market_cap_change_percentage_24h }
      /* { bgcolor: "#6a1b9a", completed: 76.5 }*/
  ];
  
   useEffect(() => {
     getCoinsList();
     getsuggestList();
    }, [params.id])





  return (
    <div className='coinDetails'>
      
      <h1 className='heading'>Details </h1>
      
      <div className='last-date'>
         <h3>Last updated : {coin.last_updated}</h3>
      </div>
     
      <div className='cdata'>
      <div className='cimage'>
        <img src={coin.image} alt="" />
      </div>
      
      <div className='coinInfo'>
   <h1>  Name :{coin.name}</h1>
   <h1>  Change in 24h : {coin.price_change_percentage_24h}%</h1>
  <h1>   Rank : {coin.market_cap_rank}</h1>
   <h1>  Current price :{coin.current_price}</h1>
          <h1>  High :{coin.high_24h}</h1>
          <h1>  low : {coin.low_24h}</h1>
          <h1>Cap price change in 24hr : {coin.market_cap_change_percentage_24h}%</h1>
          <h1>{testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
          ))}</h1>
         
          
        </div>
       </div>  
       <h1 className='heading'>Graphs </h1>
      <div className='graphs'>
        <div className='PieChart'>  <PieChart chartData={chartData} /></div>
        <div className='LineChart'> <LineChart chartData={chartData} /></div>
        <div className='BarChart'><BarChart chartData={chartData} /></div>
       
      </div>
        <hr/>
        <hr/>
      <div className='button'>
        <Link to={`/sell/${params.id}`}>
          <Button className='buyButton'>Buy</Button>
        </Link>
      
      <Button className='sellButton'>Sell</Button>
      </div>
    <hr/>
        <hr/>
  </div>
  )
}

export default Coindetails
