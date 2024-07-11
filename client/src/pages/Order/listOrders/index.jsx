import React from 'react';
import useOrders from './handler/orderHandler';

export function Orders() {
    const orders = useOrders();

    return (
        <div className="my-10 mx-10">
            <h1 className="text-2xl mb-6">Orders</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-3">Order ID</th>
                        <th className="py-3">Products</th>
                        <th className="py-3">Total Price</th>
                        <th className="py-3">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td className="py-3">{order._id}</td>
                            <td className="py-3">{order.user.username}</td>
                            <td className="py-3">
                                {order.products.map(p => (
                                    <div key={p.product._id}>
                                        {p.product.name} (x{p.quantity})
                                    </div>
                                ))}
                            </td>
                            <td className="py-3">${order.totalPrice}</td>
                            <td className="py-3">{order.address}</td>
                            <td className="py-3">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
