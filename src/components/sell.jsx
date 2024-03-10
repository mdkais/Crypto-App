import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import '../styles/sell.css'

const Sell = () => {

     const dbJson = "http://localhost:3000";

   const [theCoin, setTheCoin] = useState({});
   const [count, setCount] = useState(0);
  const [total, settotal] = useState(0);
  
      const [sellname, setsellname] = useState(''); 
  const [sellper_share, setsellper_share] = useState(''); 
  const [selltotal, setselltotal] = useState(''); 
  const [selltotalcount, setselltotalcount] = useState(''); 
  const [sellhigh, setsellhigh] = useState(''); 
  const [selllow, setselllow] = useState('');
  const [sellimg, setsellimg] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sellname = theCoin.name;
   const sellper_share = theCoin.current_price;
     const selltotal = total;
     const selltotalcount = count;
     const sellhigh = theCoin.high_24h;
    const selllow = theCoin.low_24h;
    const sellimg = theCoin.image;

    const selldata = { sellname, sellper_share, selltotal, selltotalcount, sellhigh, selllow ,sellimg};
    
    

    fetch(`${dbJson}/getcoins`,{
      method: "POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(selldata)
    }).then((res) => {
      alert("Saved Successfully")
      navigate('/');
    }).catch((err) => {
      console.log(err.message)
    })
}

    const params = useParams('');
 
     const getCoinsList = () => {
    fetch(`${dbJson}/own/${params.id}`)
      .then(response => response.json())
      .then(data => setTheCoin(data))
      .catch(error => console.log(error))
    }

      const getsuggestList = () => {
    fetch(`${dbJson}/coins/${params.id}`)
      .then(response => response.json())
      .then(data => setTheCoin(data))
      .catch(error => console.log(error))
  }
  
    
    function increase() {
      setCount(count + 1);
      let totalammount = (count+1) * theCoin.current_price;
     settotal(totalammount);
    }

    function decrease() {
      setCount(count - 1);
       let totalammount = (count-1) * theCoin.current_price;
     settotal(totalammount);
    }
 
      useEffect(() => {
          getCoinsList();
            getsuggestList();
    }, [params.id])
    return (
    <div>

         <h1 className='heading'>
                {theCoin.name}
            </h1> 
    
      <div className='coinInfo'>

            <form action="" className='formdisplay' onSubmit={handleSubmit}>
               <img src={theCoin.image} onChange={e=>setsellimg(e.target.src)} alt=""/>
              
               <div>
               <label htmlFor=""><h1 className=''>Name </h1></label>
              <textarea className="atext" value= {theCoin.name} onChange={e=>setsellname(e.target.value)}></textarea>
              </div >

           
                   <div>
              <label htmlFor=""><h1>CURRENT PRICE :</h1> </label>
              <textarea className="atext" value= {theCoin.current_price} onChange={e=>setsellper_share(e.target.value)}></textarea>
           </div>
              
               <div>
              <label htmlFor=""><h1>CHANGE IN 24 HRS : </h1></label>
              <textarea className="atext" value={theCoin.price_change_percentage_24h} />
               </div>
              
          
               <div>
              <label htmlFor=""><h1>HIGH :</h1> </label>
              <textarea className="atext" value= {theCoin.high_24h} onChange={e=>setsellhigh(e.target.value)}></textarea>
               </div>
        
               <div>
              <label htmlFor=""><h1>LOW : </h1></label>
              <textarea className="atext" value= {theCoin.low_24h} onChange={e=>setselllow(e.target.value)}></textarea>
              </div>
      
               <div>
              <label htmlFor=""><h1>COUNT :</h1></label>
              <textarea className="atext" value={count} onChange={e=>setselltotalcount(e.target.value)}></textarea>
              </div>

               <div>
              <label htmlFor=""><h1>TOTAL :</h1> </label>
              <textarea className="atext" value={total}  onChange={e=>setselltotal(e.target.value)}></textarea>
                </div >

              <div>
                <Button onClick={increase}>+</Button>
              <Button onClick={decrease}>-</Button>
              <Button  type="submit"className='submit'>buy</Button>
            </div>
            
         </form>
          </div>
          
            
     
  
     
        </div>
  )
}

export default Sell
