import React from 'react'
import { Link } from 'react-router-dom'
import { Button} from 'react-bootstrap';

const Header = () => {
  return (
    <div className='navbar'>
           
      <Button>
              <Link to=''> Home</Link>
          </Button>

           <Button>
              <Link to='/coins'> Coins</Link>
          </Button>
          
            <Button>
              <Link to='/coin/:id'> Coindetails</Link>
          </Button>

           <Button> 
              <Link to='/exchanges'> Exchanges</Link>
           </Button>
    </div>
  )
}

export default Header
