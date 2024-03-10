import React from 'react'
import { Link } from 'react-router-dom'
import { Button} from 'react-bootstrap';

const Header = () => {
  return (
    <div className='navbar'>
          
      <div className='navBtn'>
              <Link to=''> Home</Link>
          </div>

          <div className='navBtn'>
              <Link to='/coins'> Coins</Link>
          </div>
          
          <div className='navBtn'> 
              <Link to='/exchanges'> Exchanges</Link>
          </div>
    </div>
  )
}

export default Header
