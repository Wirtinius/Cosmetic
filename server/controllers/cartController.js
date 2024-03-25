const Cart = require('../models/cartModel');
const mongoose = require('mongoose');

class cartController {

    async addToCart(req, res) {
        try {
            const user = req.user;
            const {products} = req.body;

            let cart = await Cart.findOne({ user: user.id });
            
            if (!cart) {
                cart = new Cart({
                    user: user.id,
                    products: products
                });
            } else {
                cart.products.push(products);
            }

            await cart.save();
            return res.json({ message: "Product added to cart", cart });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Error adding product to cart' });
        }
    }
    
    

  async getCart(req, res) {
    try {
        const userId = req.user.id
        // const cart = await Cart.findOne({user: userId})
        const cart = await Cart.findOne({user: userId}).populate('products')
        console.log(cart)
        const cartProducts = cart.products
        return res.json(cartProducts)

    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Cart Product Getting Error'})
    }
  }

  async removeFromCart (req, res) {
    try {
        const {productId} = req.body
        const userId = req.user.id
        let cart = await Cart.findOne({ user: userId });
        const cartProductIndex = cart.products.findIndex(product => product.equals(productId));
        console.log(cartProductIndex);

        if (cartProductIndex !== -1) {
            cart.products.splice(cartProductIndex, 1);
            await cart.save();
        }

        return res.json({message: "Product removed from cart", "cart": cart})

    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Cart Product Deleting Error'})
    }
}
}

module.exports = new cartController()