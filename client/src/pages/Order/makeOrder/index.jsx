import React, { useState } from 'react';

const OrderModal = ({ isOpen, onClose, cartItems, totalPrice }) => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/order/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + window.localStorage.getItem('accessToken')
        },
        body: JSON.stringify({
          products: cartItems.map(item => ({
            product: item._id,
            quantity: 1, // Assuming quantity is always 1, update if different
          })),
          totalPrice,
          address,
        }),
        credentials: 'include', // Ensure cookies are sent with the request
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Order created successfully:', data);
        setLoading(false);
        onClose();
      } else {
        console.error('Error creating order:', data);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error creating order:', error);
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <div className="overflow-y-auto max-h-64 mb-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center mb-4">
              <img className="w-16 h-16 object-cover mr-4" src={`http://localhost:3000${item.image}`} alt={item.name} />
              <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Total Price: ${totalPrice}</h3>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Delivery Address</h3>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter your address"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2">Cancel</button>
          <button onClick={handleOrder} disabled={loading} className="bg-blue-600 text-white py-2 px-4 rounded">
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
