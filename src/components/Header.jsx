import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

const Header = () => {
  //   let btnName = 'Login';
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState('Login');
  // console.log('header render');
  const cartItems = useSelector((store)=> store.cart.items)

  return (
    <div className='flex justify-between bg-purple-400'>
      <div>
        <img src={LOGO_URL} alt="App Logo" className='w-20'/>
      </div>
      <div>
        <ul className='flex m-2 px-4'>
          <li className='m-2 px-4'>
            Online Status : {onlineStatus? "🟢" : "🔴" }
          </li>
          <li className='m-2 px-4 hover:bg-purple-600'>
            <Link to="/home">Home</Link>
          </li>
          <li className='m-2 px-4 hover:bg-purple-600'>
            <Link to="/about">About Us</Link>
          </li>
          <li className='m-2 px-4 hover:bg-purple-600'>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className='m-2 px-4 hover:bg-purple-600'>
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <button className='m-2 px-4 border border-solid hover:bg-purple-600'
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
