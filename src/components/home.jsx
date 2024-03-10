import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import '../styles/coins.css'

const Home = () => {

   const dbJson = "http://localhost:3000";

    const [course, setCourse] = useState([]);
    const [mycoins, setMycoins] = useState([]);

    const getCourseList = () => {
        fetch(`${dbJson}/own`)
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => console.log(error))
   }

     const getmyList = () => {
        fetch(`${dbJson}/getcoins`)
            .then(response => response.json())
            .then(data => setMycoins(data))
            .catch(error => console.log(error))
   }


      useEffect(() => {
         getCourseList();
         getmyList();
    }, [])

    return (
       <div className='home-page'>
        <h1 className='heading'>Profile</h1>

         <div className='pf-base'>
             <div className='profile-info'>
                <h3>Name : Kais Shaikh</h3>
      <h3>Email : kais@gmail.com</h3>
        <h3>Phone no : 123456678</h3>
        <h3>Address : XYZ</h3>
                <h3>Date Of Birth : 10th June 2003</h3></div>
           
             <div className='profile-p'>
                <img src="logo1.png" alt="" width={175}/>
             </div>
          
          </div>
             <h1 className='heading'>Wallet</h1>
          <div className='wallet'>
             <div className='balance'>Account
             <p>
                2000/-
             </p>
             </div>  
          </div>

            <h1  className='heading'>MY COINS</h1>

            <div className="display-info">
                <table className="table-h-afridi" width="100%">
                    <thead>
                   <tr>
                      
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Total ammount</th>
                            <th>Per share</th>
                      <th>Total count</th>
                      <th> Operation </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mycoins.map((record, key) => {
                                return (
                                    <tr key={key}>
                                        <td><img className='table_image'src={record.sellimg} alt="" /></td>
                                        <td>{record.sellname}</td>
                                        <td>{record.selltotal} INR </td>
                                        <td>{record.sellper_share} /-</td>
                                      <td>{record.selltotalcount}</td>
                                      <td><Button>sell</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
          </div>
          
          <h1 className='heading'>Suggection</h1>
          
          <div className="coin-page">
             
                    {course.map((record, idx) => {
                       return (
                           <Link to={`/coins/${record.id}`} className="coin-display">
                            <div key={idx}  className='coins'>
                           
                                 <div>
                                    <img src={record.image} className="coinimage" alt="" />
                                    </div>
                                   <div className="coinData">
                                      <h1>Name {record.name}</h1>
                                      <h4>{record.current_price}/-</h4>
                                       <small>{record.id}</small>
                                    </div>
                                   
                     
                            </div>
</Link>
                        )
                    })}

          </div>

         
    </div>
    );
};


export default Home
