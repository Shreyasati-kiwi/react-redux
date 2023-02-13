import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../State';
import { bindActionCreators } from 'redux';

function Shop() {
  const dispatch =useDispatch();
  const actions = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2>Buy Adidas Shoes 5000rs</h2>
        <button className='btn btn-primary mx-2' onClick={()=>{actions.withdrawMoney(100)}}>-</button>
         Add this item to cart
        <button className='btn btn-primary mx-2' onClick={()=>{actions.depositMoney(100)}}>+</button>
       
    </div>
  )
}
export default Shop;



