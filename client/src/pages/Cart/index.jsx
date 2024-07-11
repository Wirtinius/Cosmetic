import React, { useState } from 'react';
import OrderModal from '../Order/makeOrder/index';
import useCart from './handler/getCartHandler';

export function Cart() {
  const cart = useCart();
  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '')), 0);
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <div className='my-10 mx-10'>
      {cart.map((product) => (
        <div key={product._id} className='mt-10 bg-gray-100 grid grid-cols-2'>
          <div>
            <img className='w-64 h-64' src={`http://localhost:3000${product.image}`} alt={product.name} />
          </div>
          <div className='text-center mt-28'>
            <h1 className='text-xl'>{product.name}</h1>
            <h3 className='text-sm'>{product.price}</h3>
          </div>
        </div>
      ))}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-bold">Total Price: ${totalPrice}</h2>
        <button onClick={() => setOrderModalOpen(true)} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
          Order
        </button>
      </div>
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        cartItems={cart}
        totalPrice={totalPrice}
      />
    </div>
  );
}
