const Order = require('../models/orderModel');
const Cart = require('../models/cartModel'); // Assuming you have a cart model

class OrderController {
  async createOrder(req, res) {
    try {
      const user = req.user.id; // Ensure the user ID is extracted from the authenticated request
      const { products, totalPrice, address } = req.body;

      const newOrder = new Order({
        user,
        products,
        totalPrice,
        address,
      });

      await newOrder.save();

      // Optionally, clear the user's cart after creating an order
      await Cart.findOneAndUpdate({ user }, { $set: { products: [] } });

      res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка создания заказа' });
    }
  }

  async getOrders(req, res) {
    try {
      const user = req.user.id;
      const orders = await Order.find({ user }).populate('products.product');
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка получения заказов' });
    }
  }

  async updateOrder(req, res) {
    try {
      const { id } = req.params;
      const { products, totalPrice, address } = req.body;
      
      const updatedOrder = await Order.findByIdAndUpdate(
        id,
        { products, totalPrice, address },
        { new: true }
      );

      if (!updatedOrder) {
        return res.status(404).json({ message: 'Заказ не найден' });
      }

      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка обновления заказа' });
    }
  }

  async deleteOrder(req, res) {
    try {
      const { id } = req.params;
      
      const deletedOrder = await Order.findByIdAndDelete(id);

      if (!deletedOrder) {
        return res.status(404).json({ message: 'Заказ не найден' });
      }

      res.status(200).json({ message: 'Заказ успешно удалён' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка удаления заказа' });
    }
  }
}

module.exports = new OrderController();
